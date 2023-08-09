const Characteristics = ({ characteristics, className }) => {

  return (
    <div className={className + " flex w-full flex-wrap border-t-8 border-t-primary"}>
      {characteristics?.map((element, index) => {
        if (element.key && element.value) {
          const isBorderRight = index % 2 === 0;

          return (
            <div className={"flex w-full sm:w-1/2 text-black shadow-md shadow-background"}>
              <div className="basis-1/2 p-4 whitespace-nowrap overflow-hidden">{element.key}</div>
              <div className={"basis-1/2 p-4 whitespace-nowrap overflow-hidden " + (isBorderRight && "border-r border-gray3")}>{element.value}</div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Characteristics;