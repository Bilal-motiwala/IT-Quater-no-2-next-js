import React from 'react'
import Image from "next/image";

const Sec3 = () => {
  return (
    <div className='bg-black ' id='Watchs'>
    <br />
     <h2 className='text-center backdrop-blur-lg bg-blue-500 text-white'>Watchs</h2> 
     <br />
     <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/watchno1rs1150.PNG" width={400} height={300} alt="Watch 1" ></Image>

<p className='text-center'>Poshi Luxury brand Watch</p>

<p className='text-center py-2'>price 1150</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/watchno2rs900.PNG" width={400} height={300} alt="Watch 2" ></Image>

<br />

<p className='text-center'>Nautilus Design Rubber Strap Watch</p>

<p className='text-center py-2'>price 900</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/watchno3rs650.PNG" width={400} height={300} alt="Watch 3" ></Image>

<br />

<p className='text-center'>Luxury Strap Watch</p>

<p className='text-center py-2'>price 650</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>

  <br />

  <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/watchno4rs3200.PNG" width={400} height={300} alt="Watch 4" ></Image>

<p className='text-center'>Taghuer Caliber 5 Watch For Men</p>

<p className='text-center py-2'>price 3200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 5th */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/watchno5rs5000.PNG" width={400} height={300} alt="Watch 5" ></Image>

<p className='text-center'>PatekPhilippe Watch</p>

<p className='text-center py-2'>price 5000</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 6st */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/watcno6rs3750.PNG" width={375} height={280} alt="Watch 6" ></Image>

<p className='text-center'>Hublot Men Watch</p>

<p className='text-center py-2'>price 3750</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>
  <br />
    </div>

  )
}

export default Sec3
