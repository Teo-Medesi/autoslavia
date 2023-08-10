"use client"
import { useEffect, useState } from "react";

const Filter = ({refreshListings}) => {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        if (Object.keys(filters).length != 0) refreshListings(filters);
    }, [filters]);

    const handleChange = (value) => {
        setFilters(current => { return { ...current, ...value } });
    }

    const brands = ["toyota", "honda", "ford", "chevrolet", "nissan", "jeep", "volkswagen", "bmw", "mercedes", "audi", "hyundai", "kia", "subaru", "mazda", "porsche", "lexus", "volvo", "fiat", "buick", "cadillac", "mini", "jaguar", "landrover", "maserati", "lincoln", "acura", "mitsubishi", "chrysler", "dodge", "ram", "tesla", "astonmartin", "ferrari", "lamborghini", "rollsroyce", "bentley"];
    const countries = ["Croatia", "Serbia", "Bosnia & Herzegovina", "Slovenia", "Montenegro", "Macedonia"]
    const filtersArray = [{ name: "brand", data: brands }, { name: "price", data: [] }, { name: "country", data: countries }, { name: "location", data: [] }, { name: "production data", data: [] }, { name: "mileage", data: [] }, { name: "engine size", data: [] }, { name: "color", data: [] }, { name: "ABS", data: ["No ABS"] }];

    return (
        <div className="flex justify-between items-center w-full h-[10vh] padding-x-sm padding-y-sm">
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <p className="text-gray">Brand</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Price</p>
                    <div className="tag-sm !p-0 flex gap-4">
                        <input placeholder="Minimum" className="rounded p-2 bg-background shadow-md shadow-gray" type="text" />
                        <input placeholder="Maximum" className="rounded p-2 bg-background shadow-md shadow-gray" type="text" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Country</p>
                    <select onChange={event => handleChange({ country: event.target.value })} className="tag-sm">
                        {countries.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Location</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Production Date</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Color</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Mileage</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray">Engine Size</p>
                    <select onChange={event => handleChange({ brand: event.target.value })} className="tag-sm">
                        {brands.map(value => <option value={value}>{value}</option>)}
                        <option value={"all"}>all</option>
                    </select>
                </div>


            </div>


            <div className="flex flex-col">
                <p className="text-gray">Sort By</p>
                <select onChange={event => handleChange({ sortBy: event.target.value })} defaultValue={"none"} className="tag-sm" name="sort by">
                    <option value="cheapest">cheapest</option>
                    <option value="most expensive">most expensive</option>
                    <option value="oldest">oldest</option>
                    <option value="newest">newest</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
    )
}

export default Filter