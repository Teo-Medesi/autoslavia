import icon from "@/public/svgs/image.svg"
import Image from "next/image"

const UploadImages = () => {
  return (
    <div className="w-full cursor-pointer aspect-16/9 border border-gray2 rounded-xl flex flex-col gap-4 justify-center items-center">
      <Image src={icon} alt="upload images" className="w-24 aspect-1/1" />
      <p className="text-gray2">Click here to upload or drag and drop!</p>
    </div>
  )
}

export default UploadImages