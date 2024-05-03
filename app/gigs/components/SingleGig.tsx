import Image from "next/image";
import React from "react";
import { GrClose } from "react-icons/gr";

const SingleGig = ({gig}:any) =>{
    return(
        <div className="flex flex-col px-3 relative cursor-pointer">
            <div className="flex items-start space-x-5 py-2">
                <Image src={gig.profilePic} alt={gig.name} width={170} height={170} className="rounded-full"/>
                <div className="flex flex-col">
                    <p className="text-lg leading-10">{gig.name}</p>
                    <h6 className="text-xl">{gig.title}</h6>
                    <p className="text-sm leading-8 font-light">{gig.location} - Hourly: {gig.hourlyRate}</p>
                    <p className="text-sm leading-5">{gig.description}</p>
                    <p className="text-sm font-light mt-3 text-body">{gig.timestamp} ago</p>
                </div>
            </div>
            <button className="flex absolute right-5 top-2">
                <GrClose size={25} fill="#64748B" />
            </button>
            <hr className="border-t border-stroke w-full"/>
        </div>
    )
}

export default SingleGig;