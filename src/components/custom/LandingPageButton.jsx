import { cva } from "class-variance-authority"
import clsx from 'clsx'
import {motion} from 'framer-motion'

const buttonVariants = cva("rounded-full p-2 sm:px-6 sm:py-2 md:px-8 md:py-3 hover:opacity-85",{
    variants : {
      variant:{
        join : 'font-medium bg-[#3B82F6] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90',
        login:'font-medium bg-transparent outline text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90',
      }, 
    }
  })

const LandingPageButton = ({children, variant, className, ...props}) => {
  return (
    <motion.button 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.1 }}
      {...props} 
      className={clsx(buttonVariants({variant}), className)}>
        {children}
    </motion.button>
  )
}

export default LandingPageButton