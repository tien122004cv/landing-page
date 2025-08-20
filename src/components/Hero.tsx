import { assets } from "../assets/assets"

export default function Hero() {
    return (
        <div className="relative">
            <div className="rounded-xl overflow-hidden">
                <img src={assets.hero} alt="hero" className="w-full h-auto object-cover" />
            </div>
        </div>
    )
}
