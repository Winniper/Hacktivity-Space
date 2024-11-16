import { cva } from "class-variance-authority"
import clsx from 'clsx'
import {motion} from 'framer-motion'

const buttonVariants = cva("font-poppins text-sm sm:text-base md:text-lg rounded-full p-1 sm:px-5 sm:py-1 md:px-7 md:py-2 hover:opacity-85",{
    variants : {
      variant:{
        primary : 'font-medium bg-[#3B82F6] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90',
        secondary:'font-medium bg-transparent outline text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90',
      }, 
    }
  })

const CustomButton = ({children, variant, className, onClick}) => {
  return (
    <motion.button 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.1 }}
      className={clsx(buttonVariants({variant}), className)}
      onClick={onClick}>
        {children}
    </motion.button>
  )
}

export default CustomButton