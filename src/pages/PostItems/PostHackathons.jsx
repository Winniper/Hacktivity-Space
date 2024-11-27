import React, { useState } from 'react'

const PostHackathons = () => {
    const [hackathonData, setHackathonData] = useState({
        title: '',
        description: '',
        registrationLink: '',
        startDate: '',
        endDate: '',
    });
    const [postedHackathons, setPostedHackathons] = useState([]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setHackathonData({ ...hackathonData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!hackathonData.title || !hackathonData.description || !hackathonData.registrationLink || !hackathonData.startDate || !hackathonData.endDate) {
            alert('Please fill all fields!');
            return;
        }

        // Add the new hackathon to the list
        setPostedHackathons([...postedHackathons, hackathonData]);

        // Clear form
        setHackathonData({
            title: '',
            description: '',
            registrationLink: '',
            startDate: '',
            endDate: '',
        });
    };
    return (
        <div className="w-full h-auto bg-black flex flex-col items-center  pt-10">
            <h1 className="text-2xl font-bold mb-4 text-white mt-10">Post a Hackathon</h1>

            <form onSubmit={handleSubmit} className="bg-[#f97316] shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={hackathonData.title}
                        onChange={handleChange}
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hackathon title"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={hackathonData.description}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter hackathon description"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registrationLink">
                        Registration Link
                    </label>
                    <input
                        type="url"
                        id="registrationLink"
                        name="registrationLink"
                        value={hackathonData.registrationLink}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter registration link"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={hackathonData.startDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={hackathonData.endDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Post Hackathon
                </button>
            </form>

        </div>
    )
}

export default PostHackathons