import CustomButton from '../../components/base/CustomButton';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

const cardStyles = "bg-[#082f49] flex flex-col items-center font-poppins  text-white text-sm  transition-all shadow-[3px_3px_0px_black] hover:shadow-none active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl"
//it is temporary initialisation for the internships
const initializeInternships = () => {
    const tempArray = [];
    for (let i = 0; i < 10; i++) {
        tempArray.push({
            id: i,
            tittle: `SWE at Meta${i}`,
            description: `This is a description of the internship at Meta${i} lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  fugiat nulla pariatur.`,
            apply_link: 'http://localhost:5173/home',
            last_date: '2022-12-12',
        });
    }

    return tempArray;
};

const internships = initializeInternships();

const InternshipDetails = () => {

    const { id } = useParams(); // Get the ID from the route
    const internship = internships.find((internship) => internship.id === parseInt(id));

    const displayCard = (internship) => {
        return (
            <div className={clsx(cardStyles)}>

                <div className="text-3xl">
                    <h2>{internship.tittle}</h2>
                </div>
                <div>
                    <span>{internship.description}</span>
                </div>
                <div className="flex justify-evenly w-full items-baseline">
                    <CustomButton variant="primary" onClick={() => window.location.href = internship.apply_link}>APPLY HERE</CustomButton>

                    <span className="text-red-500">Last date:{internship.last_date}</span>
                </div>
            </div>
        );
    }

    const displayIntern = displayCard(internship);

    return (
        <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
          {displayIntern}
        </div>
      </div>
    )
}

export default InternshipDetails