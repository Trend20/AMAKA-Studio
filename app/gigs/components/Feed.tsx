import React from "react";
import Link from "next/link";
import {feeds} from "@/data/feeds";
import FeedOne from "@/components/FeedOne";
import FeedTwo from "@/components/FeedTwo";
import FeedThree from "@/components/FeedThree";

const Feed = () =>{
    return(
        <div className="flex flex-col px-4 w-full mt-5">
            <p className="flex text-lg font-semibold py-3">Feed ({feeds.length})</p>
            <div className="flex flex-col border-t border-stroke">
                <FeedOne />
                <FeedTwo />
                <FeedThree />
                <Link href={'profile'}
                      className="flex text-[#2C36F0] border border-[#2C36F0] justify-center items-center rounded-xl p-3 mt-5">View
                    Profile</Link>
            </div>
        </div>
    )
}

export default Feed;