import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

const cardStyles = "bg-[#6b7280] flex flex-col items-center font-poppins  text-white text-sm  transition-all shadow-[3px_3px_0px_black] hover:shadow-none active:scale-95 p-0 sm:p-6 md:p-8 rounded-3xl"
const ProfilePage = () => {
    const location = useLocation()
    const {teamName} = location.state || {};
    const details = {
        name: "testUser",
        rollno: "101803123",
        email: "testuser@gmail.com",
        phone: "1234567890",
        linkedin: "https://in.linkedin.com/",
    }
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center overflow-auto">
            <div className="flex flex-col gap-5 w-11/12 sm:w-3/4 h-full pt-24 pb-10">
                <div className={clsx(cardStyles)}>
                    <div className='text-3xl font-bold border-b-2 border-white-500 w-full flex justify-center'>
                        <h1>Personal Details</h1>
                    </div>
                    <div className="space-y-4  text-lg text-red-100">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Name:</span>
                            <span>{details.name}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Roll No:</span>
                            <span>{details.rollno}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Email:</span>
                            <span>{details.email}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Phone:</span>
                            <span>{details.phone}</span>
                        </div>
                        <h2>

                            <a
                                href={details.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 underline"
                            >
                                {/* <button className="ml-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition">
                                    Go to My LinkedIn
                                </button> */}
                            </a>
                        </h2>
                    </div>

                </div>


                <div className={clsx(cardStyles)}>
                    <div className='text-3xl font-bold border-b-2 border-white-500 w-full flex justify-center'>
                        <h1>Hackathons Info.</h1>
                    </div>
                    <div className="space-y-4  text-lg text-red-100">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Hackathon:</span>
                            <span>Smart India Hackathon</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Team Name:</span>
                            <span>{teamName}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-900 w-32">Teammates:</span>
                            <span>testUser</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
