import React from 'react'
import Image from "next/image";

const Sec4 = () => {
  return (
    <div className='bg-black ' id='Wallet'>
    <br />
     <h2 className='text-center backdrop-blur-lg bg-blue-500 text-white'>Wallet</h2> 
     <br />
     <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/walletno1rs1350.PNG" width={400} height={300} alt="Wallet 1" ></Image>

<p className='text-center'>HAQ Premium Wallet</p>

<p className='text-center py-2'>price 1350</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/walletno2rs1200.PNG" width={400} height={300} alt="Wallet 2" ></Image>

<br />

<p className='text-center'>Pure Leather Wallet</p>

<p className='text-center py-2'>price 1200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/walletno3rs600.PNG" width={400} height={300} alt="Wallet 3" ></Image>

<br />

<p className='text-center'>Pocket Friendly Slim & Smart Wallet</p>

<p className='text-center py-2'>price 600</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>

  <br />

  <main className='flex flex-col justify-around md:flex-row'>
     
     <div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center '>

<Image src="/walletno4rs800.PNG" width={400} height={300} alt="Wallet 4" ></Image>

<p className='text-center'>Card Holder Mini Pocket Wallet For Men</p>

<p className='text-center py-2'>price 800</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

{/* 5th */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/walletno5rs3200.PNG" width={400} height={300} alt="Wallet 5" ></Image>

<p className='text-center'>Genuine Leather Wallet</p>

<p className='text-center py-2'>price 3200</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />


{/* 6st */}

<div className='w-full md:w-3/12 border-black border-2  bg-white flex flex-col justify-center items-center'>

<Image src="/walletno6rs3500.PNG" width={375} height={280} alt="Wallet 6" ></Image>

<p className='text-center'>Mens Made Genuine Leather Wallet</p>

<p className='text-center py-2'>price 3500</p>

<div className='flex justify-center my-2'>
    <button className='bg-red-500 text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

  </main>
    </div>

  )
}

export default Sec4
