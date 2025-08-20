import Title from "../Title";
import ExperienceCard from "./ExperienceCard";
import FeatureImage from "./FeatureImage";
import SectionSocial from "./SectionSocial";


export default function AboutUsSection() {
    return (
        <div className="py-30">
            <Title title='about us' subTitle='SAIL EXCELLENCE IS OUR PROMISE' />
            <div className="flex justify-between items-center">
                <div className="flex w-3/5 gap-4">
                    <ExperienceCard />
                    <FeatureImage />
                </div>
                <SectionSocial />
            </div>
        </div>
    )
}
