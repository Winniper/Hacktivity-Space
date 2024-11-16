import Card from "../../components/custom/Card"

const HomeView = ({onClick}) => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="mt-10 grid h-full w-full grid-cols-2 grid-rows-2 gap-3 p-20">
            <Card classname="col-span-2 col-row-1 rounded-3xl bg-[#958AAA] text-black" text="Announcement" onClick={() => onClick("announcement")}/>
            <Card classname="col-span-1 col-row-1 rounded-3xl bg-[#FE6219] text-black" text="Hackathons" onClick={() => onClick("hackathons")}/>
            <Card classname="col-span-1 col-row-1 rounded-3xl bg-[#FAE932] text-black" text="Internships" onClick={() => onClick("internships")}/>
        </div>
    </div>
  )
}

export default HomeView