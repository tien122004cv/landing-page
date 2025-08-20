type TitleProps = {
    title: string
    subTitle: string
}


export default function Title({ title, subTitle }: TitleProps) {
    return (
        <div className="text-center py-10">
            <p className="qwitcher-grypen-regular text-primary text-4xl">{title}</p>
            <p className="text-3xl pt-px font-bold text-primaryText">{subTitle}</p>
        </div>
    )
}
