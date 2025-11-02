

import React from 'react'
import Link from 'next/link'

function Contact() {
    return (
        <div className='  align-center gap-10'>
            <h1 className='text-3xl text-gray-600'>Contact page</h1>
            <Link href='/' className='text-xl text-blue-500 inline-block '>
                back home
            </Link>
        </div>
    )
}

export default Contact
