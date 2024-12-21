import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
      {/* {LAYOUT LEFT} */}
      {/* {We gonna style the left side smaller than the right side} */}
      <div className="w-[14%] md-:w-[8%] lg:w-[16%] xl:w-[14%]">
          <Link href="/" className="flex items-center justify-center lg:justify-start p-4 gap-2">
              <img src="/logo.png" alt="logo" width={32} height={32}/>
              <span className="hidden lg:block">Go School Management</span>
          </Link>
          <Menu>

          </Menu>
      </div>
      {/* {LAYOUT RIGHT} */}
      <div className="w-[86%] bg-blue-400 md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  }