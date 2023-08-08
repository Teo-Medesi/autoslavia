import SearchBar from "./SearchBar"

const MobileNavbar = ({ className }) => {
  return (
    <nav className={className + " w-full bg-primary flex justify-center items-center px-3"}>
      <SearchBar/>
    </nav>
  )
}

export default MobileNavbar