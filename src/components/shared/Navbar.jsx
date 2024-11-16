import { useRef, useState } from "react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent py-6 fixed top-0 z-10 w-full">
      <SlideTabs/>
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(`${path}`)
  }

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-[#3B82F6] bg-[#202020] text-white p-1"
    >
      <Tab setPosition={setPosition} onClick={() => handleClick('home')}>Home</Tab>
      <Tab setPosition={setPosition} onClick={() => handleClick('profile')}>Profile</Tab>
      <Tab setPosition={setPosition}>Logout</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-poppins hover:text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#404040] md:h-12"
    />
  );
};

export default Navbar