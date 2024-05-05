import Image from "next/image";
import React from "react";

const AboutCreator = ({gig}:any) => {
    return(
        <div className="flex flex-col w-full px-4 border-b py-5 border-stroke">
            <p className="flex text-lg font-semibold">About the creator</p>
            <div className="flex justify-between items-center w-full mt-5">
                <div className="flex lg:space-x-3 space-x-1 w-3/4 items-center">
                    <Image src={gig.profilePic} alt="profile" width={40} height={40} className="rounded-full"/>
                    <p className="lg:text-xl leading-10 font-semibold text-sm">{gig.name}</p>
                    <Image src="/icons/verify.svg" alt="profile" width={20} height={20} className="rounded-full"/>
                </div>
                <div className="flex px-4 space-x-2 cursor-pointer w-1/4">
                    <button
                        className="flex text-sm bg-[#2C36F0] text-white outline-0 p-3 w-40 justify-center items-center rounded-xl">Subscribe
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-sm leading-10 font-light text-bodydark2">@rosannaspansino . 19,7k subscribers . 28 posts</p>
                <p className="text-sm leading-5 mt-5">
                    {gig.overview}.... <b>Read More</b>
                </p>
            </div>
        </div>
    )
}

export default AboutCreator;