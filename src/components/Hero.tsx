import { assets } from "../assets/assets"
import SearchBar from "./Searching/SearchBar"

export default function Hero() {
    return (
        <div className="relative">
            <div className="rounded-xl overflow-hidden">
                <img src={assets.hero} alt="hero" className="w-full h-auto object-cover" />
            </div>
            <SearchBar />
        </div>
    )
}
