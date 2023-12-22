import { useState } from "react";
import { FaUser, FaUserNurse } from "react-icons/fa";
import { GiWomanElfFace } from "react-icons/gi";
import { GrUserFemale } from "react-icons/gr";
import { SlUserFemale } from "react-icons/sl";
import Container from "../../componnent/Container";

export default function Register() {


    const [title, settitle] = useState('');



    return (
        <main className="f-fit py-40 pb-52">
            <Container>
                <div>
                    <h1 className="text-3xl font-bold pcolor text-center pb-8">Register Form</h1>

                    <div className="bg-gray-100 rounded-xl h-fit w-full p-8">

                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 pb-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-between">
                                    <span>Title *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <div onClick={() => settitle('MR')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MR" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <FaUserNurse />
                                    <h2>MR</h2>
                                </div>

                                <div onClick={() => settitle('MRS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MRS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <SlUserFemale />
                                    <h2>MRS</h2>
                                </div>

                                <div onClick={() => settitle('MSS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MSS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <GiWomanElfFace />
                                    <h2>MSS</h2>
                                </div>

                                <div onClick={() => settitle('MS')} className={`w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer gap-2 ${title == "MS" ? "pbg text-gray-100" : "text-gray-700"}`}>
                                    <GrUserFemale />
                                    <h2>MS</h2>
                                </div>
                            </div>
                        </div>



                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-between">
                                    <span>Frist Name *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 pl-10 relative text-md" />
                                <FaUser className="absolute text-gray-500 ml-4" />
                            </div>
                        </div>





                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-between">
                                    <span>Family Name / Sure Name *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input type="text" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 pl-10 relative text-md" />
                                <FaUser className="absolute text-gray-500 ml-4" />
                            </div>
                        </div>





                        <div className="flex gap-5 flex-col lg:flex-row items-center justify-center border-b-2 border-gray-200 py-4">
                            <div className="w-full lg:w-2/4">
                                <h3 className="text-lg flex items-center justify-between">
                                    <span>Date of Brith *</span>
                                    <span className="text-gray-900">:</span>
                                </h3>
                            </div>
                            <div className="w-full flex items-center justify-between gap-2">
                                <input type="date" className="w-full rounded-md flex justify-center items-center py-1 shadow cursor-pointer bg-gray-100 outline-1 outline-gray-300 px-3 text-md" />
                            </div>
                        </div>










                    </div>

                </div>
            </Container>
        </main>
    )
}