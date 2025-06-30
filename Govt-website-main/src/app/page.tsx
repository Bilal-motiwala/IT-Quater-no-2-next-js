import Sec2 from '@/Sec2'
import React from 'react'

const page = () => {
  return (
    <>
    <main className='flex flex-col md:flex-row justify-between items-center w-full mt-10 flex-wrap'>
  
    <div className='w-1/2'>

      <h1 className='whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:leading-none md:text-left lg:text-6xl text-[#044E83] ml-4'>Governor Sindh</h1>
      <h1 className='whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:left-[2rem]] text-[#044E83] ml-4'>Kamran Khan Tessori</h1>
      <h1 className='mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#2EB6E8] ml-4 '>Certified Cloud Engineer (GenEng)</h1>
      <h1 className='mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#2EB6E8] ml-4 '>Applied Generative AI</h1>
      <h1 className='mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#2EB6E8] ml-4'>Engineer (GenEng)</h1>
      <br />
      <p className='my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left text-[#044E83] ml-4 mt-3'>Earn up to $5,000 / month</p>
      <p className='my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left text-[#044E83] ml-4 mt-3'>Now admission are open in</p>
      <p className='my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left text-[#044E83] ml-4 mt-3'>Hyderabad</p>
      <div className='flex justify-between w-96'>
      <button className='w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-wider text-white transition-all hover:transparent-y-1 sm:py-4 sm:text-base md:w-52 ml-4 mt-8 bg-[#044E83]'>Apply Now</button>
      <div className='text-center flex-col text-xl tracking-widest text-main sm:text-3xl'>
      <h4 className='font-extrabold text-xl text-[#044E83] ml-4 mt-7 w-40'>562,143</h4>
      <h4 className='text-center tracking-wider text-main sm:mb-0 sm:text-sm  text-xl text-[#044E83] ml-4 mt-5 w-40'>Accepted Applications</h4>
      </div>
      </div>     
    </div>

    <div className='w-1/2'>
      <img src="./kamran.png" alt="kamran" className='md: ml-40 h-auto min-w-[800px] lg:w=[600px] mr-10'/>
    </div>
      </main>


     <main className='relative z-0 w-full overflow-hidden bg-opacity-75 bg-cover __className_092cb9 mt-0 '>
    <div className='absolute- inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80 '>
    <div className='h-fit w-full pt-5 md:w-1/2 md:py-10'></div>
     <div className='z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex-row lg:w-[90%] xl:w-[1300px]'> 
    </div> 
       </div>
      <br />
      <div>
      <h1 className='text-center xl:text-[30px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-[#044E83]'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br /> Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className='px-4 sm:mt-10 mt-7 mb-8 xl:text-[1.2rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
    </div>
    <br />
    </main>

   <Sec2/>

    
    </>
  )
}

export default page
