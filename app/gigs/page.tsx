"use client"
import { useState} from "react";
import {gigsData} from "@/data/gigs";
import SingleGig from "@/app/gigs/components/SingleGig";
import GigDetails from "@/app/gigs/components/GigDetails";

const GigsPage = () => {
    const defaultGig= gigsData[0];
    const [selectedGig, setSelectedGig] = useState(defaultGig);

    const handleSelectGig = (job: any) => {
        setSelectedGig(job);
    };
    console.log(defaultGig);

    return(
        <div className="flex w-full px-4">
            <div className="flex flex-col w-1/2 space-y-8 border-r border-stroke py-2">
                {
                    gigsData.map((item)=>(
                        <SingleGig gig={item} key={item.id} handleClick={()=>handleSelectGig(item)}/>
                    ))
                }
            </div>
            <div className="flex w-3/4">
                <GigDetails gig={selectedGig} />
            </div>
        </div>
    )
}

export default GigsPage;