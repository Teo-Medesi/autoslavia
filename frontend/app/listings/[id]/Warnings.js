import Image from "next/image"
import warning from "@/public/svgs/warning.svg"


const Warnings = ({ warnings, className }) => {
  return (
    <div className={className + "flex text-black text-xl py-12 flex-col gap-4"}>
      {warnings?.map(element => {
        return (
          <div className="flex items-center gap-4 border-t border-gray2">
            <Image src={warning} className="w-6 h-6" alt="warning" />
            <p>{element.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Warnings