const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="pb-30 md:pb-10 bg-black text-center">
            <div className="container max-w-350 mx-auto px-8">
                <p className="text-white text-sm">
                    © {currentYear} LENS Photography. All rights reserved.
                </p>
                <p className="text-white text-xs mt-2">
                    Crafted with precision and passion
                </p>
            </div>
        </footer>
    )
}

export default Footer
