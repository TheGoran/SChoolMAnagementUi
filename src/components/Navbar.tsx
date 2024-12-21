import Image from "next/image"
const Navbar = () => {
    return (
      <div className="flex items-center justify-between p-4">
        {/* {SEARCH BAR} */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
              <Image  alt="" src="/search.png" width={14}  height={14} />
              <input type="text" placeholder="Search.."  className="w-[200px] p-2 bg-transparent outline-none placeholder-black "/>
         </div>
        {/* {ICONS AND USER} */}
        <div className="flex items-center gap-6 px-2 justify-end w-full">
            <div className=" bg-blue-400 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20}></Image>                
            </div>
            <div className=" relative bg-blue-400 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/announcement.png" alt="" width={20} height={20}></Image>
                <div className="absolute -top-1 -right-4  w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white text-xs">
                     1
                </div>                
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Go Doe</span>
                <span className="text-[12px] text-gray-500 text-right">Admin</span>

            </div>
            <Image alt="" src="/avatar.png" width={32} height={32} className="rounded-full"></Image>
        </div>

      </div>
    )
    }
  
  
  
  export default Navbar