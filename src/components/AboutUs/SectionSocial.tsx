import { assets } from "../../assets/assets";


export default function SectionSocial() {
    return (
        <div className="flex-1">
            <div>
                <h1>BOOK YOUR DREAM YACHT TODAY</h1>
                <p>Today, we are the leading brand for luxury performance motor yathts. We offer the most driverce product portfolio in the world. Each with its own personality, our yathts are engineered with the owrner in mind and startding at the helm</p>
            </div>
            <div className="relative">
                <img src={assets.person1} alt="" className="w-10 h-10 rounded-full absolute object-cover" />
                <img src={assets.person2} alt="" className="w-10 h-10 rounded-full absolute object-cover left-[25px]" />
                <img src={assets.person3} alt="" className="w-10 h-10 rounded-full absolute object-cover left-[50px]" />
            </div>
        </div>
    )
}