import Particle from "../../components/custom/Particle"

const Page404 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#000000] flex-col space-y-10">
      <Particle/>
      <span className="text-white text-3xl font-poppins tracking-tighter font-medium"><span className="text-[#3B82F6] text-3xl font-poppins">404 </span>Page not found</span>
    </div>
  )
}

export default Page404