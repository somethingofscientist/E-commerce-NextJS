import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useAuthContext } from '../ctx/authContext'
import { useCartContext } from '../ctx/cartContext'
import Cart from './Cart'

const Navbar = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartContext()
  const { user } = useAuthContext()

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-pink-500 text-[white] h-[60px] w-full py-2 px-6 flex justify-center'>
      <div className='h-full w-10/12 my-auto flex justify-between items-center'>
        {/* left */}
        <h2 className='text-3xl'>
          <Link href='/'>Apple Store</Link>
        </h2>
        {/* center */}
        <ul className='flex justify-center items-center gap-6 text-[#efefef] text-[18px]'>
          <Link href='/'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Home</li></Link>
          <Link href='/'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Hero</li></Link>
          <Link href='/'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Categories</li></Link>
          <Link href='/'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Featured</li></Link>
          <Link href='/'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Contacts</li></Link>
        </ul>
        {/* right */}
        <div className='flex items-center gap-6'>
          {/* <div className='flex items-center gap-4 bg-white px-2 py-1 rounded-lg'>
            <input className='text-[#222] outline-none' type="text" placeholder='Search...' />
            <AiOutlineSearch color="black" />
          </div> */}

          <div className='relative'>
            <AiOutlineShoppingCart size={25} onClick={toggleCart} />
            <span className='absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]'>
              {cartItems?.length}
            </span>
            <div className="absolute top-4 -right-16 z-10">
              {isCartOpen && <Cart />}
            </div>
          </div>
          <span>
            {user ? (user?.username) : 
            (<Link href='/login'><li className='cursor-pointer transition-all hover:text-[#efefefe6]'>Login</li></Link>)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar