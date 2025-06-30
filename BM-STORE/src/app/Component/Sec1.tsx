import React from 'react'
import Image from "next/image";

const Sec1 = () => {
  return (
    <div className='bg-black' id='Caps'> 
    <br />
    <h2 className='text-center backdrop-blur-lg bg-blue-500 text-white'>Caps</h2> 
    <br />
     <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/nycap.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>New York Cap</p>

<p className='text-center py-2'>price 1400</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/baseballcaprs1049.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>Base Ball Cap</p>

<p className='text-center py-2'>price 1049</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/newyorkwhitecaprs1000.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>New York Cap</p>

<p className='text-center py-2'>price 1000</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

    </main> 
  
  <br />
    <main className='flex justify-around md:flex-row flex-col '>

    <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/cruisecaprs800.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>Cruise Cap</p>

<p className='text-center py-2'>price 800</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 5nd */}


<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/fashionablecaprs1100.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>Fashionable Cap</p>

<p className='text-center py-2'>price 1100</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 6rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/loadingcaprs1030.png" width={300} height={300} alt="NY Cap" ></Image>

<p className='text-center'>Loading Cap</p>

<p className='text-center py-2'>price 1030</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

    </main >
    <br />
    </div>
  )
}

export default Sec1
