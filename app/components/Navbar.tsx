import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='shadow p-4'>
      <Link className='mr-4' href={"/"}>Home</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </div>
  )
}

export default Navbar
