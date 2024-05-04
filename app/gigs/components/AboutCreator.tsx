import Image from "next/image";
import React from "react";

const AboutCreator = ({gig}:any) => {
    return(
        <div className="flex flex-col w-full px-4 border-b py-5 border-stroke">
            <p className="flex text-lg font-semibold">About the creator</p>
            <div className="flex justify-between w-full mt-5">
                <div className="flex space-x-3 items-center">
                    <Image src={gig.profilePic} alt="profile" width={40} height={40} className="rounded-full"/>
                    <p className="text-xl leading-10 font-semibold">{gig.name}</p>
                    <Image src="/icons/verify.svg" alt="profile" width={20} height={20} className="rounded-full"/>
                </div>
                <div className="flex px-4 space-x-2 cursor-pointer">
                    <button
                        className="flex text-sm bg-[#2C36F0] text-white outline-0 p-3 w-40 justify-center items-center rounded-xl">Subscribe
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-sm leading-10 font-light text-bodydark2">@rosannaspansino . 19,7k subscribers . 28 posts</p>
                <p className="text-sm leading-5 mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt velit sit amet
                    lacus tristique, non venenatis justo fermentum. Proin dictum, enim sed ullamcorper porta,
                    odio eros tincidunt eros, eu ultrices nulla velit nec nulla. Etiam ut dui magna. Sed vel ultricies
                    nunc. In hac habitasse platea dictumst. Integer commodo est.... <b>Read More</b>
                </p>
            </div>
        </div>
    )
}

export default AboutCreator;