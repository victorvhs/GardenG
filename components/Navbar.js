import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
      <div className="container mx-auto bg-purple-300 p-5 place-content-center">
        <nav className="flex-row md:justify-between">
          <div>
            <button 
              id="hamburgerbtn" 
              className='md:hidden bg-purple-800'
              onClick={()=> {setNavbarOpen(!navbarOpen); console.log("oi")}}
              >
              Menu
            </button>
          </div>
          <div   className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }>
            <ul className="md:flex md:flex-row" id='mobileMenu'>
              <li className="pr-5">
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li className="pr-5">
                <Link href='/Help'>
                  <a>Help</a> 
                </Link>
              </li>
              <li className="pr-5">
                <Link href='/Plant'>
                  <a>Find a plant</a>
                </Link>
              </li>
              <li className="pr-5">
              <Link href='/About'>
                <a>What is behind the scenes</a>
              </Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
  )
}