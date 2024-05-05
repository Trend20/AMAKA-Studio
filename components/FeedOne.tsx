import Link from "next/link";
import Image from "next/image";
import React from "react";

const FeedOne = () => {
    return (
        <div className="flex py-5 justify-between w-full">
            <div className="flex flex-col w-3/4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm leading-5 mt-5 lg:w-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt velit sit amet.
                    Integer commodo est.... <b>Read More</b>
                </p>
                <div className="flex space-x-5 w-full mt-5">
                    <Link href={'/'}
                          className="flex text-xs items-center justify-center font-normal uppercase bg-bodydark rounded-full w-auto px-2 py-3">
                        Design
                    </Link>
                    <Link href={'/'}
                          className="flex text-xs items-center justify-center font-normal uppercase bg-bodydark rounded-full w-auto px-2 py-3">
                        Lagos
                    </Link>
                    <Link href={'/'}
                          className="flex text-xs items-center justify-center font-normal uppercase bg-bodydark rounded-full w-auto px-2 py-3">
                        Architecture
                    </Link>
                </div>
                <div className="flex items-center space-x-5 mt-5">
                            <span className="flex items-center space-x-2">
                                <Image src="/icons/like.svg" alt="bookmark" width={15} height={15}/>
                                <p className="text-xs font-light text-bodydark2">3.2k</p>
                            </span>
                    <span className="flex items-center space-x-2">
                                <Image src="/icons/mark.svg" alt="bookmark" width={15} height={15}/>
                                <p className="text-xs font-light text-bodydark2">1.4k</p>
                            </span>
                    <span className="flex items-center space-x-2">
                                <Image src="/icons/square.svg" alt="bookmark" width={15} height={15}/>
                                <p className="text-xs font-light text-bodydark2">1.4k</p>
                            </span>
                    <span className="flex items-center space-x-1">
                                <Image src="/icons/bars.svg" alt="bookmark" width={15} height={15}/>
                                <p className="text-xs font-light text-bodydark2">1.2k</p>
                            </span>
                </div>
            </div>
            <div className="flex flex-col items-end lg:w-1/4 w-1/2 space-y-2">
                <Image src="/images/covering.png" alt="bookmark" width={200} height={200}/>
                <Image src="/icons/upload.svg" alt="bookmark" width={20} height={20}/>
            </div>
        </div>
    )
}

export default FeedOne;