import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import logo from '../assets/image/youtube.png'
import { Button } from '../componats/Button'
import {  useState } from 'react'
// import { Menus } from '../Context/SidebarContext'
export default function HeaderPage() {
    const [searchFullWidth,setSearchFullWidth] = useState(false)
    // const isOpen = useContext(Menus)
    // console.log(isOpen?.isOpen);
   
    
  return (
    <div className=" flex justify-between gap-0 lg:gap-20 pt-2 mb-6 mx-4">
        <div className={`md:flex ${searchFullWidth?"hidden" : "flex"} items-center gap-1 flex-shrink-0` }>
            <Button   variant ="ghost" size="icon">
                {/* onClick={()=> isOpen?.setIsOpen((prev: boolean) => !prev)} */}
                <Menu/>
            </Button>
            <a href="/" className='flex items-center gap-[4px]'>
                <img className='w-[30px] h-[30px]' src={logo} alt="logo" />
                <span className="font-bold "> YouTube</span>
            </a>
        </div>
    <div className={` ${searchFullWidth ? "flex" : "hidden"} md:flex flex-grow items-center justify-center gap-2`}>
    <div className= {`flex flex-grow max-w-[600px]`}>
    <Button onClick={()=>setSearchFullWidth(false)} variant ="ghost" size="icon" className='md:hidden'>
                <ArrowLeft/>
            </Button>
    <input type='search' placeholder='search'
    className='px-4 py-1 rounded-l-full  border border-secondary-border w-full text-lg focus:border-blue-500 outline-none'/>
    <Button  className='py-2 px-4 flex-shrink-0 rounded-r-full border-secondary-border'><Search/></Button>
    </div>
    <Button  size="icon" className='flex-shrink-0' >
        <Mic/>
    </Button>
    </div>
        <div className={`${searchFullWidth ? "hidden" : "flex"} md:flex  flex-shrank-0 md:g-2 `}>
            <Button onClick={()=>setSearchFullWidth(true)} variant ="ghost" size="icon" className='md:hidden'>
                <Search/>
            </Button>
            <Button variant ="ghost" size="icon" className='md:hidden'>
                <Mic/>
            </Button>
            <Button variant ="ghost" size="icon">
                <Upload/>
            </Button>
            <Button variant ="ghost" size="icon">
                <Bell/>
            </Button>
            <Button variant ="ghost" size="icon">
                <User/>
            </Button>
        </div>
    </div>
  )
}
