import { assets } from "../assets/assets"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <div className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-30">
                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="" className="w-10" />
                    <p className="text-xl font-bold text-primary">SAILOR</p>
                </div>
                <Navbar />
            </div>
            <button className="flex items-center gap-2 border-2 py-2 px-7 rounded-lg cursor-pointer border-primary">
                <img src={assets.logo} alt="" className="w-5" />
                <p className="font-bold text-primary">Book Now</p>
            </button>
        </div>
    )
}
