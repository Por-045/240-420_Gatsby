import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/students'>students</Link>

            </div>


        </nav>
    )
}
