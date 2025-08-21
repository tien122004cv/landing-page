import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaAnchor } from "react-icons/fa";
import SearchBox from "./SearchBox";

export default function SearchBar() {
    return (
        <div className="absolute bg-white/80 backdrop-blur-md left-[100px] right-[100px] bottom-[-42px] rounded-2xl shadow-lg">
            <div className="relative flex items-center justify-center py-5 px-8">
                <SearchBox
                    title="Location"
                    icon={<CiLocationOn />}
                    text="Dominica, Natural Islanddddd"
                />
                <div className="w-px bg-gray-300 h-15"></div>
                <SearchBox
                    title="Check In"
                    icon={<FaCalendarAlt />}
                    text="09 Jan 2024"
                />
                <div className="w-px bg-gray-300 h-15"></div>
                <SearchBox
                    title="Check Out"
                    icon={<FaCalendarAlt />}
                    text="09 Jan 2024"
                />
                <div className="w-px bg-gray-300 h-15"></div>
                <SearchBox
                    title="Boat Type"
                    icon={<FaAnchor />}
                    text="Yacht"
                />
                <button className="py-2 px-8 rounded-xl bg-primary text-white font-semibold hover:bg-teal-600 transition">
                    Search
                </button>
            </div>
        </div>
    );
}
