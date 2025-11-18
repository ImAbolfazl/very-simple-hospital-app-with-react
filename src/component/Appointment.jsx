import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Appointment = ({doctor, title, place, date, time}) => {
  return (
    <div className='flex flex-col gap-5 m-2 p-5 rounded-2xl border border-solid border-[#1E40AF]'>
      <div className='flex flex-col'>
        <span className='font-bold'>{doctor}</span>
        <span className='text-xl text-gray-700'>{title} • {place}</span>
      </div>
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-20'>
        <div className='flex items-center text-xl text-gray-700 gap-3'>
          <FaCalendarAlt />
          <span className='wrap-break-words'>{date}</span>
        </div>
        <div className='flex items-center text-xl text-gray-700 gap-3'>
          <FaClock />
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Appointment