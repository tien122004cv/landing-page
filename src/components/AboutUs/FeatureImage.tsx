import { assets } from "../../assets/assets"

export default function FeatureImage() {
    return (
        <div className="w- relative">
            <img src={assets.about_us_img_ct} alt="" className="w-[75%] rounded-xl absolute" />
        </div>
    )
}
