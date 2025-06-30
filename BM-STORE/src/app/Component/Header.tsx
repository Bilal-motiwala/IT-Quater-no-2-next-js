import React from 'react'

const Header = () => {
  return (
    <>
    <header className='sticky top-0 z-30 bg-main backdrop-blur-3xl print:hidden w-full h-16 bg-blue-600 flex justify-between items-center p-6'>

<div className='mt-10'> <img src="/bmstore.png" alt="logo" className=' w-24 flex color-transparent'/></div>

<div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10 bis_skin_checked="1"flex '>
  <a href="/">
  <div className='menu_btns capitalize'>Home</div>
  </a>
  <a href="#Caps">Caps</a>
  <a href="#T-Shirts">T-Shirts</a>
  <a href="#Watchs">Watchs</a>
  <a href="#Wallet">Wallet</a>
  <a href="#Contact Me">Contact Me</a>
</div>

</header>
</>

  )
}

export default Header
