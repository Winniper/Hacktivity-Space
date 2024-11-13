import {motion, useMotionValue, useTransform, animate} from "framer-motion"
import { useEffect } from "react"
import CursorBlinker from "./CursorBlinker"

const TextAnimation = () => {
    const text = "Unlock Collaboration, Fuel "
    const highlightText = "Innovation."
    const totalLength = text.length + highlightText.length;
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayText = useTransform(rounded, (latest) => latest <= text.length ? text.slice(0, latest) : text)
    const dislayHightlightText = useTransform(rounded, (latest) => latest > text.length ? highlightText.slice(0, latest - text.length) : "")

    useEffect(() => {
        const controls = animate(count, totalLength, {
            type: "tween",
            duration: 2,
            ease: "easeInOut"
        })
        return controls.stop
    }, [])

    return(
        <span className="inline">
            <motion.span className="text-white sm:text-xl md:text-3xl lg:text-5xl font-bold">
                {displayText}
            </motion.span>
            <motion.span className="text-[#3B82F6] sm:text-xl md:text-3xl lg:text-5xl font-bold">
                {dislayHightlightText}
            </motion.span>
            <CursorBlinker />
        </span>
    )
}

export default TextAnimation