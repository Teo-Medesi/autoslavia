const MobileNavbar = ({ className }) => {
  return (
    <nav className={className + " w-full bg-primary flex justify-center items-center px-6"}>
      <input placeholder="Zastava 750..." type="text" className="p-2 px-8 rounded-full placeholder:text-black outline-none text-black w-full" />
    </nav>
  )
}

export default MobileNavbar