import UserCard from "@/components/UserCard"
import CountChart from "@/components/CountChart"
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/*USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students"/>
          <UserCard type="teachers" />
          <UserCard type="parents"/>
          <UserCard type="staff" />
        </div>
        {/* Middle Charts(Students  count and Attendance) */}
        <div className="flex gap-4 flex-col lg:flex-row">
              {/*CountChart */}
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
              </div>
              {/*Attendance Chart */}
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart />
              </div>
        </div>
        {/*Bottom ~Charts (Finance) */}
        <div className="w-full h-[500px]">
            <FinanceChart />
        </div>
    </div>
      {/* {RIGHT} */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  )
}

export default AdminPage