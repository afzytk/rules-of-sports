import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full bg-black shadow-md py-4 px-6'>
            <div className='flex items-center justify-between'>
                  <div className="text-2xl font-bol text-white">Rules of Sports</div>
                  <div className='hidden md:flex gap-8 text-lg'>
                    
                  </div>
            </div>

        </div>
    )
}

export default Navbar;