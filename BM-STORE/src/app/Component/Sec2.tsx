import React from 'react'
import Image from "next/image";
const Sec2 = () => {
  return (
    <div className='bg-black ' id='T-Shirts'>
    <br />
     <h2 className='text-center backdrop-blur-lg bg-blue-500 text-white'>T-Shirts</h2> 
     <br />
     <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/tshirtsno1rs820.PNG" width={400} height={300} alt="T-shirt 1" ></Image>

<p className='text-center'>New Smile X High Quality T-Shirt for Boys </p>

<p className='text-center py-2'>price 820</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/tshirtno2rs800.PNG" width={400} height={300} alt="T-Shirt 2" ></Image>

<p className='text-center'>Premium Quality White Half Sleeves T-Shirt</p>

<p className='text-center py-2'>price 800</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/tshirtno3rs1200.PNG" width={400} height={300} alt="T-shirt 3" ></Image>

<p className='text-center'>tracksuit new arrival</p>

<p className='text-center py-2'>price 1200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>

  <br />

  <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/tshirtno4rs700.PNG" width={400} height={300} alt="T-shirt 4" ></Image>

<p className='text-center'>Supra High Quality T-Shirt for Boys </p>

<p className='text-center py-2'>price 700</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 5th */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/tshirtno5rs750.PNG" width={400} height={300} alt="T-Shirt 5" ></Image>

<p className='text-center'>Avengers T-Shirt</p>

<p className='text-center py-2'>price 700</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 6st */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/tshirtno6rs900.PNG" width={400} height={300} alt="T-shirt 6" ></Image>

<p className='text-center'>Newpaper Printed Jersey T-Shirt</p>

<p className='text-center py-2'>price 900</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>
  <br />
    </div>
  )
}

export default Sec2
