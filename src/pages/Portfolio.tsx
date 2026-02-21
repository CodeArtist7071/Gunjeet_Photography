import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'
import { ArrowLeftCircle } from 'lucide-react'

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
    const isMobile = useIsMobile();

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
        (isMobile)? (
        <PortfolioPage navigate={navigate}/>
        ):(
             <section id="portfolio" className="py-20 md:pt-5 relative">
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
       
    )
}




const PortfolioPage = ({navigate}:any) => {
  const masonryItems = [
    {
      id: 1,
      title: "Veiled, 2023",
      aspect: "3/5",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtynNJGBqzUF7iXrEXxrsixnexvccDjlC29AvRUC_3Bt69j6mIPQpLgOA1a90Sspi2Jl-HVI7fn1icWdZYopfW71OF3XGu5GpNo9Zlh378WlsbDs5OC7hA4zjb7bIgVd5YRs1W3NmQ-K2S-RXuBj_qtUllAWISRwFtfr9iRBNxNwUBi1XZFFS7B6jGO9ebdypdDlcmLFeuf6vF1NNL6jSxlfyzGnrPGR_TqfJO2b0zwLOWNqL2oYLH1AZCeCHQjuUr7gFa9oI_e8",
    },
    {
      id: 2,
      title: "Structural, 2024",
      aspect: "1/1",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxXZKfPZH1JVeYWdv2cl9LEeVm4WVs_TKBzDLd7nPc-uLtwerugfKsizPmDXDc48NN6nDgQQtFy9DQsJHVX9vGaYkBKjqCWL6xS21JQQZwHsiYIgeam0LlfZSidl8-odiplo5ghqRNWvJ-udo2-82e1OBQhSaoGgYFxzvm3RpWGngieg0YfCUW8ba-x0uPqOv8053S7GPLPdHqOPr6NjtcTCor-v0FsdUn9h8DsxLmacBf5cUSuXC5pdaZk61hhBAD88Vn9_o30SQ",
    },
    {
      id: 3,
      title: "Mist, 2023",
      aspect: "2/3",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qVarHtEMNEz45Tukx1ppfRJe-WYR1l5DbjyQrb96SmoLT3s9nAskqqrZ_XMAX__KxOh10avuv8YBPOuiNt7UrAn4LSQgzS2LyN_aEINJeIhbMl1RAqIRY968i4UupY5M0H2s5EaogJVFe92HGGNXUkk_AmS0qRUt9XeG6AhlV2SEd9m7tnWVbWFfICZtkwTyu00hV5VzoQ4YdormvCY8DgJQKXtK7CM822lWsQouaQXB-PRHXLr6KhFhX9LEMCUvzXg7QkaoSS0",
    },
    {
      id: 4,
      title: "Shadows, 2024",
      aspect: "4/5",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIv8FDDqUVnEMUKzeOhZ5sPF1AaEBM_DPygny-uJhkgTEb7LSeGt5c4_MO9IUm1xi3GP6UXKpK4_djCVAd6Xy07JxI3yBb93xMuXLuvcEYG3jpz0fyC_8lm3bXJDCsf3jAxNEJinwXsfECGdvNw0A0nAqjyU_Qq_M_X63AcYrQFrO8SlbAqPnt2ZDqp3kovwoSnrd2DCirOdNIfjxsA_I1BbM32wl8FM1pE0vY-m4R8qCW29fybRm8nvc76RXml9JGn6ZTLsC4hag",
    },
    {
      id: 5,
      title: "Nature, 2022",
      aspect: "1/1",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAB12jYrFmnfvCtw6QrGN5IZMqmpdTrJrSRnqY_Q5jqdts6GcIbBukIvTL6ns-BZq5vxGzB46ul6k9y87avYhqwP0or5IwNLZXJfDWBwacXTDYrsoVoD1nshuQxOFWg24KVChEkgbCGuc1FrJPZ56JY27Cczq0u4yG1gW7W_5TccCxFoJNH-2LtfZoEtZWdsuctQjU8ZSdQrpI46lRKR7_VdEqIsKtS-khUJOTi7bUeloadJWVoLBlm585QrwTuHdTvpZzOttJT2zw",
    },
    {
      id: 6,
      title: "Analog, 2023",
      aspect: "3/4",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbpzfFlCbXmPpUUdQ1sFHRhRBhVeYEbNNoj46b8vnDkipzsf_MJnbVCveJzC3_8e6WLcrNe9nbffBBfEO5nql0uk7OUrxKUR8l_dbbyYTuwGO4QfEekc-tAB-2TwUVmNvvYpMt2-Or1-TmxCFfObxeH_alRWuABaTvjHwCN63nd01PpoErQVDVeKdJEsGt6PPV1Mc0DHrSsR-m20Xw_hU8zXl-qGGRR1LNCR-2YnFZ2R_rQgC9OZjjoIAouG6de8H-cj-OpA-jLD4",
    },
  ];

  return (
    <div id="portfolio-m" className=" text-slate-900 dark:text-slate-100 font-display flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-6 w-full fixed top-0 left-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2 text-primary group transition-all">
          <ArrowLeftCircle size={35} color='white' onClick={()=>navigate(-1)}/>
        </a>
        <h1 className="text-sm font-bold tracking-widest uppercase">Portfolio</h1>
        {/* <button className="flex items-center justify-center p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button> */}
      </header>

      {/* Main Title */}
      <div className="px-4 pb-4 pt-24">
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Selected Works</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
          A curated collection of monochrome street photography and architectural shadows.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="pb-6 overflow-x-auto no-scrollbar">
        <div className="flex px-4 gap-3">
          {["All", "Street", "Portrait", "Abstract"].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap ${
                category === "All"
                  ? "bg-primary text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 transition-colors"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
     <div className="columns-3 gap-4 md:hidden">
    {masonryItems.map((item) => (
      <div
        key={item.id}
        className="group relative overflow-hidden rounded-lg mb-4 break-inside-avoid"
      >
        <div
          className={`bg-slate-200 dark:bg-slate-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 aspect-[${item.aspect}]`}
          style={{ backgroundImage: `url('${item.image}')` }}
          aria-label={item.title}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-[10px] text-white/70 uppercase tracking-widest">{item.title}</p>
        </div>
      </div>
    ))}
  </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 mb-4">End of Gallery</p>
        <button className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
          Back to Top
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-background-light dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-around h-16 px-6">
          {["home", "grid_view", "person", "chat_bubble"].map((icon, idx) => (
            <a key={idx} href="#" className={`flex flex-col items-center gap-1 ${idx === 1 ? "text-primary" : "text-slate-400 hover:text-primary transition-colors"}`}>
              <span className="material-symbols-outlined">{icon}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 z-40 active:scale-95 transition-transform">
        <span className="material-symbols-outlined">tune</span>
      </button>
    </div>
  );
};


