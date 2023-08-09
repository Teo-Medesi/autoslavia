const Loading = ({ classname }) => {
  return (
    <div className={classname + " flex h-full w-full justify-center items-center "}>
      <div className="w-24 h-24 border-primary rounded-full border-[1rem] border-black-3 border-t-secondary animate-spin"></div>
    </div>
  )
}

export default Loading