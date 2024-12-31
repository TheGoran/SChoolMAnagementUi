"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
   present: 156,
   absent: 10
  },
  {
    name: 'Tue',
    present: 200,
    absent: 10
  },
  {
    name: 'Wed',
    present: 80,
    absent: 5
  },
  {
    name: 'Thu',
    present: 90,
    absent: 6
  },
  {
    name: 'Fri',
    present: 156,
    absent: 15
  },
]
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/*Title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}></Image>
        </div>
            <ResponsiveContainer width="100%" height="90%">
            <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
            <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
            <Tooltip contentStyle={{borderRadius:"20px", borderColor:"lightgray", backgroundColor:"darkgray"}} />
            <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
            <Bar legendType='circle' radius={[10,10,0,0]} dataKey="present" fill="#C3EBFA" activeBar={<Rectangle fill="green" stroke="white" />} />
            <Bar legendType='circle' radius={[10,10,0,0]} dataKey="absent" fill="#FAE27C" activeBar={<Rectangle fill="red" stroke="white"   />} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart