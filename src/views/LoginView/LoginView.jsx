import CustomButton from "../../components/base/CustomButton"
import CustomInputField from "../../components/base/CustomInputField"
import Particle from "../../components/custom/Particle"

const LoginView = () => {
  return (
    <div className="bg-[#000] w-full h-screen flex items-center justify-center relative">
      <Particle/>
      <div className="bg-[#000] border rounded-lg p-6 sm:p-8 md:p-10 max-h-fit w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-6 sm:gap-7 md:gap-9 relative z-10">
        <span className="text-white font-poppins font-bold text-xl sm:text-2xl md:text-3xl">LogIn</span>
        <CustomInputField type={"email"} placeholder={"email@thapar.edu"}/>
        <CustomInputField type={"password"} placeholder={"password"}/>
        <CustomButton variant={"primary"}>LogIn</CustomButton>
      </div>
    </div>
  )
}

export default LoginView 