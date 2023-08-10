import Image from "next/image"
import icon from "@/public/svgs/drop-down.svg"

const FilterItem = ({filter, setFilters, isInput, isPrice}) => {
    return (
        <select placeholder={filter.name} className="tag-sm">
                {filter?.data?.map(value => <option className="p-4" value={value}>{value}</option>)}
                <option value={filter.name}>{filter.name}</option>
        </select>
    )
}

export default FilterItem