import { Link } from 'react-router-dom'
import { FaSun, FaMoon} from "react-icons/fa"

const Navbar = () => {
    return (
        <div className='w-full bg-black shadow-md py-4 px-6'>
            <div className='flex items-center justify-between'>
                  <div className="text-2xl font-bold text-white">Rules of Sports</div>
                  <div className='hidden md:flex gap-8 text-lg'>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/sports" className='text-white hover:text-gray-300'>Sports</Link>
                    <Link to="about" className='text-white hover:text-gray-300'>About</Link>
                    <button className='text-white border px-3 py-1 rounded-lg hover:bg-gray-800'><FaSun /></button>
                  </div>
            </div>

        </div>
    )
}

export default Navbar;