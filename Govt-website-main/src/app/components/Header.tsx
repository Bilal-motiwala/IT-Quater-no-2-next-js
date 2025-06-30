const Header = () => {
  return (
    <>
          <header className='sticky top-0 z-30 bg-main backdrop-blur-3xl print:hidden w-full h-16 bg-blue-600 flex justify-between items-center p-6'>
      <div className='mt-10'> <img src="/govt.png" alt="logo" className='mt-14 w-[70px] sm:mt-6  sm:w-[80-px] md:w-[90px] color-transparent'/></div>
      <h1 className='text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl'>Tuition Free Education Program on Latest Technologies </h1>
      <div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10 bis_skin_checked="1"flex'>
        <a href="/">
        <div className='menu_btns capitalize'>Home</div>
        </a>
        <a href="https://www.governorsindh.com/apply">Apply</a>
        <a href="https://www.governorsindh.com/jobs">Jobs</a>
        <a href="https://www.governorsindh.com/result">Result</a>
        <a href="">Courses</a>
      </div>
    </header>
    </>
  )
}

export default Header
