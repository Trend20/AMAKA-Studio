import React from "react";
import Link from "next/link";
import Image from "next/image";
import {feeds} from "@/data/feeds";

const Feed = () =>{
    return(
        <div className="flex flex-col px-4 w-full mt-5">
            <p className="flex text-lg font-semibold py-3">Feed ({feeds.length})</p>
            <div className="flex flex-col border-t border-stroke">
                <div className="flex py-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-sm leading-5 mt-5">
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
                    <div className="flex flex-col items-end w-1/4 space-y-2">
                        <Image src="/images/covering.png" alt="bookmark" width={200} height={200}/>
                        <Image src="/icons/upload.svg" alt="bookmark" width={20} height={20}/>
                    </div>
                </div>
                <div className="flex flex-col py-5 border-t border-stroke">
                    <Link href={'/'} className="font-semibold text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.</Link>
                    <div className="flex flex-col items-start w-full mt-5">
                        <Image src="/images/feed2.png" alt="cover" width={1000} height={500}/>
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
                <div className="flex flex-col py-5 border-t border-stroke">
                    <p className="leading-5 font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="leading-5 font-light text-sm py-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt velit sit amet lacus tristique,
                        non venenatis justo fermentum. Proin dictum, enim sed ullamcorper porta, odio eros tincidunt eros, eu ultrices
                        nulla velit nec nulla. Etiam ut dui magna. Sed vel ultricies nunc. In hac habitasse platea dictumst.
                        Integer commodo est eu justo scelerisque condimentum. Cras auctor euismod purus, nec ullamcorper quam placerat non.
                    </p>
                    <div className="flex flex-col items-start w-full">
                        <Image src="/images/feed3.png" alt="cover" width={1000} height={500}/>
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
                <Link href={'profile'}
                      className="flex text-[#2C36F0] border border-[#2C36F0] justify-center items-center rounded-xl p-3 mt-5">View
                    Profile</Link>
            </div>
        </div>
    )
}

export default Feed;