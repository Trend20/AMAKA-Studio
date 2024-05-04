import React from "react";
import {gigHistory} from "@/data/gigHistory";
import Link from "next/link";
import Image from "next/image";

const GigHistory = () =>{
    return(
        <div className="flex flex-col px-4 w-full mt-5">
            <p className="flex text-lg font-semibold">Gig history({gigHistory.length})</p>
            <div className="flex flex-col">
                {
                    gigHistory.map((item, index) => (
                        <div className="flex flex-col py-3 border-t border-stroke" key={index}>
                            <Link href={`/${item.title}`} className="text-[#2C36F0] font-semibold">{item.title}</Link>
                            <p className="text-sm leading-10 font-light text-bodydark2">{item.dateRange}</p>
                            <span className="flex items-center space-x-3">
                                <Image src={item.rating} alt="rating" width={50} height={50} className="rounded-full"/>
                                <p className="text-xs font-light">4.50 | Canada</p>
                            </span>
                            <p className="font-light text-sm leading-5 mt-5 w-full">{item.description}</p>
                            <div className="grid grid-cols-4 gap-5 mt-5">
                                {
                                    item.gallery.map((item, index) => (
                                        <div className="flex flex-col items-start">
                                            <Image src={item.coverImg} alt="cover" width={200} height={200} className=""/>
                                            <p>{item.overview}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <span className="flex items-center space-x-8 mt-5 text-sm leading-10 font-light text-bodydark2">
                                <p>$230</p>
                                <p>Fixed-price</p>
                            </span>
                        </div>
                    ))
                }
                <Link href={'profile'}>View Profile</Link>
            </div>
        </div>
    )
}

export default GigHistory;