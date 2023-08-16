export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="hidden lg:flex basis-1/4 w-1/4"></div>
      <div className="flex w-full lg:basis-1/2 lg:w-1/2">{children}</div>
      <div className="hidden lg:flex basis-1/4 w-1/4"></div>
    </div>
  )
}