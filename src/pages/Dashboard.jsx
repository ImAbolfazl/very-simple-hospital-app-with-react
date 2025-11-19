import React, { useState } from 'react'
import Header from '../component/Header'
import { ImProfile } from "react-icons/im";
import { MdPlace } from "react-icons/md";
import Appointment from '../component/Appointment';

const Dashboard = () => {
  const [isActive, setIsActive] = useState("Profile");

  const setActive = (e) => {
    setIsActive(e.currentTarget.title)
  }

  const Labels = [
    {id: 1,name: "Profile", icon: ImProfile},
    {id: 2,name: "Appointments", icon: MdPlace},
  ]
  
  const decoyAppointments = [
    {doctor: "Dr. test", title: "test title", place: "test place", date: "1404-09-02", time:"10:30"},
    {doctor: "Dr. test", title: "test title", place: "test place", date: "1404-09-02", time:"10:30"},
    {doctor: "Dr. test", title: "test title", place: "test place", date: "1404-09-02", time:"10:30"},
    {doctor: "Dr. test", title: "test title", place: "test place", date: "1404-09-02", time:"10:30"},
    {doctor: "Dr. test", title: "test title", place: "test place", date: "1404-09-02", time:"10:30"},
  ]

  return <>
    <Header/>
    <div className='flex justify-around h-screen items-center mx-4 gap-5'>
      <div className='h-[75%] w-full pb-20 md:pb-0'>
        {isActive === "Profile" && (
          <div className='bg-white h-full w-full rounded-xl p-4 font-bold text-3xl'>
           <div className='flex flex-col lg:flex-row justify-evenly items-center gap-8 px-4'>
             <div className='flex flex-col sm:flex-row items-center gap-6'>
               <div className='bg-blue-500 h-20 w-20 sm:h-28 sm:w-28 rounded-full flex items-center justify-center text-3xl sm:text-5xl flex-shrink-0'>F</div>
               <div className='text-center sm:text-left'>
                 <div className='text-4xl sm:text-5xl'>
                   <span>First Name</span> <span>Last Name</span>
                 </div>
               </div>
             </div>
             <div className='text-center sm:text-left text-2xl sm:text-3xl space-y-3'>
               <p>Number</p>
               <p>Date of Birth</p>
               <p>Password</p>
             </div>
           </div>
          </div>
        )}

        {isActive === "Appointments" && (
          <div className='bg-white h-full w-full rounded-xl p-4 text-3xl overflow-y-scroll'>
            {decoyAppointments.map((app, index) => (
              <Appointment
                doctor={app.doctor}
                title={app.title}
                place={app.place}
                date={app.date}
                time={app.time}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
      <div className='hidden md:flex text-3xl text-black bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.18)] flex-col h-[75%]'>
        {Labels.map((label) => 
          <div 
            onClick={setActive} 
            title={label.name} 
            key={label.id} 
            className={`flex items-center gap-1 p-4 cursor-pointer ${label.id === 1 && "rounded-t-xl"} ${isActive === label.name && "bg-black text-white"}`}
          > 
            <label.icon /> {label.name}
          </div>
        )}
      </div>
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white h-16 shadow-[0_8px_25px_rgba(0,0,0,0.18)] flex justify-around items-center'>
        {Labels.map((label) => (
          <div
            key={label.id}
            title={label.name}
            onClick={setActive}
            className={`flex flex-col items-center text-sm cursor-pointer ${isActive === label.name ? "text-blue-600" : "text-black"}`}
          >
            <label.icon size={22} />
            <span>{label.name}</span>
          </div>
        ))}
      </div>

    </div>
  </>
}

export default Dashboard
