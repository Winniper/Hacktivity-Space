import Card from "../../components/custom/Card"

const InternshipView = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
            <Card classname="bg-[#FAE932] text-black" text="SWE at Meta"/>
            <Card classname="bg-[#FAE932] text-black" text="Cloud engineer at Amazon"/>
            <Card classname="bg-[#FAE932] text-black" text="React.js Developer at Netflix"/>
            <Card classname="bg-[#FAE932] text-black" text="ML Engineer at Google"/>
            <Card classname="bg-[#FAE932] text-black" text="SWE at Meta"/>
            <Card classname="bg-[#FAE932] text-black" text="Cloud engineer at Amazon"/>
            <Card classname="bg-[#FAE932] text-black" text="React.js Developer at Netflix"/>
            <Card classname="bg-[#FAE932] text-black" text="ML Engineer at Google"/>
        </div>
    </div>
  )
}

export default InternshipView