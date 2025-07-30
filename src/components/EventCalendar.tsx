"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null ;
type Value = ValuePiece | [ValuePiece, ValuePiece]

//Temp  hardcoded Events data

const events = [
    {
        id:1,
        title:"Lorem Ipsum Dolor",
        time:"12:00 PM - 2:00 PM",
        description: "Liorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        id:2,
        title:"Lorem Ipsum Dolor",
        time:"9:00 PM - 2:00 PM",
        description: "Liorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        id:3,
        title:"Lorem Ipsum Dolor",
        time:"10:00 PM - 2:00 PM",
        description: "Liorem Ipsum dolor sit amet, consectetur adipiscing elit"
    },    
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} /> 
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold my-4">Events</h1>
               <Image src='/moreDark.png' alt="" width={20} height={20}/>
            </div>
            <div className= "flex flex-col gap-4">
                {events.map(event=>(
                    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-goSky even:border-t-goPurple" key={event.id}>
                        <div className="flex items-center justify-between">
                          <h1 className="font-semibold text-gray-600">{event.title}</h1>
                          <span className="text-gray-300 text-xs">{event.time} </span> 
                        </div>    
                        <p className="mt-2 text-gray-400 text-sm">{event.description} </p>
                     </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar