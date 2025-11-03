import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <nav className='max-w-3xl mx-auto py-4 flex gap-x-4 '>
            <Link className='hover:text-blue-500' href='/'>Home</Link>
            <Link className='hover:text-blue-500' href='/counter'>Counter</Link>
            <Link className='hover:text-blue-500' href='/tours'>Tours</Link>
            <Link className='hover:text-blue-500' href='/actions'>Actions</Link>
        </nav>
    );
}

export default Navbar;