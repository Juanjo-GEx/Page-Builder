import Navbar from "../pages/NavBar"

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-100 h-20 px-10">
        <p className="uppercase font-bold text-lg">Global Exchange</p>
        <Navbar />
    </div>
  )
}

export default Header