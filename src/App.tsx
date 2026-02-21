import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import EventGallery from "./components/EventGallery"
import { Portfolio } from "./components/Portfolio"
import { Portfolio as MobilePortfolioPage } from "../src/pages/Portfolio"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import About from "./components/About"
import {About as MobileAboutPage} from "../src/pages/About"
import Contact from "./components/Contact"
import {Contact as MobileContactPage} from "../src/pages/Contact"
import { useIsMobile } from "./hooks/useIsMobile"


function App() {
    const isMobile = useIsMobile();
    return (
        <div className="bg-black min-h-screen text-white">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/:eventType" element={<EventGallery />} />
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/portfolio-m"element={<MobilePortfolioPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about-mobile" element={<MobileAboutPage/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/contact-mobile" element={<MobileContactPage/>}/>
            </Routes>
            {isMobile ? null : <Footer/>}
            
        </div>
    )
}

export default App
