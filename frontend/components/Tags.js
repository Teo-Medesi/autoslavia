"use client"
import { useState } from "react"

import Image from "next/image"

const Tags = ({ tagsProp, className }) => {
  const [tags, setTags] = useState(tagsProp?.slice(0, 7));
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    if (isToggled) setTags(tagsProp?.slice(0, 7));
    else setTags(tagsProp);

    setIsToggled(current => !current);
  }

  return (
    <div className={className + " flex flex-col"}>
      <div className="flex flex-wrap w-full gap-4">
        {tags?.map(tag => {
          if (tag.text) {
            return (
              <div className="py-4 px-6 rounded flex gap-2 items-center text-black font-semibold shadow-md shadow-gray2">
                <Image src={tag.icon} className="w-6 h-6" alt="tag icon" />
                <p className="whitespace-nowrap">{tag.text}</p>
              </div>
            )
          }
        })}
        <button onClick={handleClick} className="p-4 bg-primary text-background w-max rounded">{isToggled ? "Show Less" : "Show More"}</button>
      </div>
    </div>
  )
}

export default Tags