import Link from "next/link";
import Image from "next/image";
import React from "react";

const FeedTwo = () => {
    return (
        <div className="flex flex-col py-5 border-t border-stroke">
            <Link href={'/'} className="font-semibold text-2xl w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</Link>
            <div className="flex flex-col items-start w-full mt-5">
                <Image src="/images/feed2.png" alt="cover" width={1000} height={500}/>
            </div>
            <div className="flex items-center justify-between w-full mt-5">
                <div className="flex items-center space-x-5 w-3/4">
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
                <div className="flex">
                    <Image src="/icons/upload.svg" alt="bookmark" width={20} height={20}/>
                </div>
            </div>
        </div>
    )
}

export default FeedTwo;