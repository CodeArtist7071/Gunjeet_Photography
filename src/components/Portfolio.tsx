import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface PortfolioItem {
    id: number
    image: string
    title: string
    category: string
    slug: string
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        image: '/gunjeet_photography/images/portfolio1.png',
        title: 'Weddings',
        category: 'Event',
        slug: 'weddings'
    },
    {
        id: 2,
        image: '/gunjeet_photography/images/portfolio2.png',
        title: 'Corporate Events',
        category: 'Professional',
        slug: 'corporate'
    },
    {
        id: 3,
        image: '/gunjeet_photography/images/portfolio3.png',
        title: 'Portraits',
        category: 'Personal',
        slug: 'portraits'
    },
]

export const Portfolio = () => {
    const portfolioRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const items = portfolioRef.current?.querySelectorAll('.portfolio-item')
        items?.forEach((item) => observer.observe(item))

        return () => {
            items?.forEach((item) => observer.unobserve(item))
        }
    }, [])

    const handleItemClick = (slug: string) => {
        navigate(`/gallery/${slug}`)
    }

    return (
      <section id="portfolio" className="py-20 md:pt-5 relative">
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.9)_45%,rgba(0,0,0,0.9)_65%,rgba(0,0,0,0)_75%)]">
        </div>
            <div className="container max-w-350 mx-auto px-8">
                <div className="text-center mb-12 md:mb-24 opacity-55 translate-y-8 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white">Event Photography</h2>
                    <p className="text-base block md:hidden md:text-lg text-white">
                        Capturing moments across different types of events
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-24"
                    ref={portfolioRef}
                >
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleItemClick(item.slug)}
                            className="portfolio-item reveal relative overflow-hidden rounded-lg aspect-4/5 cursor-pointer bg-charcoal-dark shadow-medium transition-transform duration-normal hover:-translate-y-2 hover:shadow-strong group"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 gradient-overlay translate-y-0 md:translate-y-full transition-transform duration-1000 opacity-55 group-hover:translate-y-0">
                                <h3 className="text-2xl font-medium mb-2 text-white">{item.title}</h3>
                                <p className="text-sm text-white uppercase tracking-widest">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


