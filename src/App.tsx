import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import EventGallery from "./components/EventGallery"

function App() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/:eventType" element={<EventGallery />} />
            </Routes>
        </div>
    )
}

export default App
