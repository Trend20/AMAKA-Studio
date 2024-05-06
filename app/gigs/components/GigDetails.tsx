import React from "react";
import Image from "next/image";
import { BsBookmarkFill } from "react-icons/bs";

const GigDetails = ({gig, handleBookmarkClick}:any) =>{
    console.log(gig);
    return (
        <div className="flex items-start flex-col py-4 w-full">
            <div className="flex justify-between w-full">
                <div className="flex px-4 space-x-5">
                    <Image src={gig.profilePic} alt="profile" width={50} height={50} className="rounded-full"/>
                    <p className="text-xl leading-10 font-semibold">{gig.name}</p>
                </div>
                <div className="flex px-4 space-x-2 cursor-pointer">
                    <button onClick={() => handleBookmarkClick(gig.id)}>
                        {gig.bookmarked ? <BsBookmarkFill size={25}/> : <Image src="/icons/bookmark.svg" alt="bookmark" width={30} height={30} />}
                    </button>
                    <Image src="/icons/more.svg" alt="bookmark" width={30} height={30}/>
                </div>
            </div>
            <div className="flex flex-col px-4">
                <span className="flex items-center space-x-2 w-full text-bodydark2">
                    <p className="text-sm leading-10">{gig.location}</p>
                    <span className="flex items-center space-x-2 text-sm"><p
                        className="text-sm font-light">Sent:</p> <p>{gig.timestamp} ago</p></span>
                </span>
                <span className="flex items-center space-x-2 w-full text-bodydark2">
                    <Image src="/icons/role.svg" alt="bookmark" width={30} height={30}/>
                    <p className="text-sm leading-10 font-light">{gig.title}</p>
                </span>
                <span className="flex items-center space-x-2 w-full text-bodydark2">
                    <Image src="/icons/timer.svg" alt="bookmark" width={30} height={30}/>
                    <p className="text-sm leading-10 font-light">Hourly . {gig.hourlyRate} raised</p>
                </span>
                <span className="flex items-center space-x-2 w-full text-bodydark2">
                    <Image src="/icons/settings.svg" alt="bookmark" width={30} height={30}/>
                    <p className="text-sm leading-10 font-light">Experience level. Intermediate</p>
                </span>

                <div className="flex items-center space-x-8 mt-5">
                    <button
                        className="flex text-sm bg-[#2C36F0] text-white outline-0 p-3 w-40 justify-center items-center rounded-xl">Hire
                    </button>
                    <button
                        className="flex text-sm bg-transparent border border-[#2C36F0] text-[#2C36F0] space-x-3 outline-0 p-3 w-40 justify-center items-center rounded-xl">
                        <Image src="/icons/chatting.svg" alt="bookmark" width={20} height={20} className="mr-3"/>
                        Message
                    </button>
                </div>
                <div className="flex flex-col w-full mt-8">
                    <p className="flex text-lg font-semibold">Brief</p>
                    <p className="text-sm leading-5">
                        {gig.overview}
                    </p>
                    <div className="flex flex-col mt-5 space-y-2">
                        {
                            gig.roles.map((item:any)=>(
                                <li key={item.id} className="text-sm">{item.desc}</li>
                            ))
                        }
                    </div>
                    <p className="text-sm leading-5 mt-5">
                        {gig.description}
                    </p>
                </div>

                <div className="flex flex-col mt-5">
                    <p>Best Regards,</p>
                    <p>{gig.name}</p>
                </div>
            </div>
        </div>
    )
}

export default GigDetails;