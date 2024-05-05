import Image from "next/image";
import React from "react";

const FeedThree = () => {
    return (
        <div className="flex flex-col py-5 border-t border-stroke">
            <p className="leading-5 font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</p>
            <p className="leading-5 font-light text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt velit sit amet lacus
                tristique,
                non venenatis justo fermentum. Proin dictum, enim sed ullamcorper porta, odio eros tincidunt
                eros, eu ultrices
                nulla velit nec nulla. Etiam ut dui magna. Sed vel ultricies nunc. In hac habitasse platea
                dictumst.
                Integer commodo est eu justo scelerisque condimentum. Cras auctor euismod purus, nec ullamcorper
                quam placerat non.
            </p>
            <div className="flex flex-col items-start w-full">
                <Image src="/images/feed3.png" alt="cover" width={1000} height={500}/>
            </div>
            <div className="flex items-center justify-between mt-5">
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

export default FeedThree;