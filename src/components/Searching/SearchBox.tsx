import type { ReactNode } from "react"

interface Props {
    title: string,
    icon: ReactNode,
    text: string
}

export default function SearchBox({ title, icon, text }: Props) {
    return (
        <div className="flex-1 flex justify-center">
            <div className="px-5">
                <p className="font-semibold text-gray-600">{title}</p>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-blue-500 text-xl">{icon}</span>
                    <p className="text-gray-700 truncate max-w-[180px]">{text}</p>
                </div>
            </div>
        </div>
    )
}
