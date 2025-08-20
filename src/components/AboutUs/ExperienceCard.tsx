import { assets } from "../../assets/assets"

export default function ExperienceCard() {
    return (
        <div className="w-3/5">
            <img src={assets.about_us_img_l} alt="" className="w-full rounded-2xl" />
            <div className="flex items-center text-xl text-primaryText font-bold">
                <p className="text-2xl">10</p>
                <img src={assets.logo} alt="" />
                <p>Years Of Experience</p>
            </div>
        </div>
    )
}