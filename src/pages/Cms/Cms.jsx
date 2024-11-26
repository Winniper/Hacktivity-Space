import React from 'react'
import Card from '../../components/custom/Card'
import { useNavigate } from 'react-router-dom';

const Cms = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="mt-10 grid h-full w-full grid-cols-1 grid-rows-3 gap-3 p-20">
            <Card classname="col-span-1 col-row-1 rounded-3xl bg-[#15803d] text-black" text="Announcement" onClick={() => onClick("announcement")}/>
            <Card classname="col-span-1 col-row-1 rounded-3xl bg-[#15803d] text-black" text="Hackathons" onClick={() => onClick("hackathons")}/>
            <Card classname="col-span-1 col-row-1 rounded-3xl bg-[#15803d] text-black" text="Internships" onClick={() =>  navigate(`/internships`)}/>
        </div>
    </div>
  )
}

export default Cms