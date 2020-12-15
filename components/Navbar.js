import Link from 'next/link'

export default function Navbar(){
  return (
    <div className='menuBar'>
    <ol>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/Help'>
        <a>Help</a> 
        </Link>
      </li>
      <li>
        <Link href='/Plant'>
          <a>Find a plant</a>
        </Link>
      </li>
      <li>
        <Link href='/About'>
        <a>What is behind the scenes</a>
        </Link>
      </li>
    </ol>
    </div>
  )
}