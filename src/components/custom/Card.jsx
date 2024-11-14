import clsx from "clsx"

const cardStyles = "flex items-center font-poppins font-bold text-sm sm:text-2xl md:text-3xl transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl"

function Card({classname, text, onClick}) {
  return (
    <div onClick={onClick} className={clsx(cardStyles, classname)}>
        <span className="mx-2">{text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </div>
  )
}

export default Card