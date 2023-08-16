import { UploadImages } from "@/components";

export default function CreateNewListing() {
  return (
    <form className="w-full padding-x padding-y flex flex-col gap-8 bg-white min-h-[90vh]">
      <h1 className="h1">New Listing</h1>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="title" className="input-label">Title</label>
        <input type="text" name="title" className="input-sm" placeholder="Beremo šljive..." />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="price" className="input-label">Price</label>
        <input type="text" name="price" className="input-sm" placeholder="4000 EU" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="description" className="input-label">Description</label>
        <textarea type="text" name="description" className="textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi exercitationem sit. Nam aliquid unde doloribus error repellat fugiat, consectetur magnam amet atque inventore quia, corporis perspiciatis. Id, esse et?" />
      </div>

      <h1 className="h1">Location</h1>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="country" className="input-label">Country</label>
        <input type="text" name="country" className="input-sm" placeholder="Croatia" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="municipality" className="input-label">Municipality</label>
        <input type="text" name="municipality" className="input-sm" placeholder="Vukovarsko-Srijemska" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="settlement" className="input-label">Settlement</label>
        <input type="text" name="settlement" className="input-sm" placeholder="Vukovar" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="settlement" className="input-label">Settlement</label>
        <input type="text" name="settlement" className="input-sm" placeholder="Vukovar" />
      </div>

      <h1 className="h1">Images</h1>
      <UploadImages />

      <h1 className="h1">Characteristics</h1>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="brand" className="input-label">Brand</label>
        <input type="text" name="brand" className="input-sm" placeholder="Volkswagen" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="mileage" className="input-label">Mileage</label>
        <input type="text" name="mileage" className="input-sm" placeholder="12 000 KM" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="manufacture_date" className="input-label">Manufacture Date</label>
        <input type="text" name="manufacture_date" className="input-sm" placeholder="2013" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="fuel" className="input-label">Fuel</label>
        <input type="text" name="fuel" className="input-sm" placeholder="Diesel" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="horse_power" className="input-label">Horse Power</label>
        <input type="text" name="horse_power" className="input-sm" placeholder="55 HP" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="engine_volume" className="input-label">Engine Volume</label>
        <input type="text" name="engine_volume" className="input-sm" placeholder="1.5 L" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="transmission" className="input-label">Transmission</label>
        <input type="text" name="transmission" className="input-sm" placeholder="Automatic" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="AC" className="input-label">AC - Ventilation</label>
        <input type="text" name="AC" className="input-sm" placeholder="AC works" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="doors" className="input-label">Doors</label>
        <input type="text" name="doors" className="input-sm" placeholder="4/5" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="color" className="input-label">Color</label>
        <input type="text" name="color" className="input-sm" placeholder="White" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="seats" className="input-label">Seats</label>
        <input type="text" name="seats" className="input-sm" placeholder="5 seats" />
      </div>


    </form>
  )
}