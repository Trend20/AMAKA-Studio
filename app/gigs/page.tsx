"use client"
import { useState} from "react";
import {gigsData} from "@/data/gigs";
import SingleGig from "@/app/gigs/components/SingleGig";
import GigDetails from "@/app/gigs/components/GigDetails";
import Skills from "@/components/Skills";
import AboutCreator from "@/app/gigs/components/AboutCreator";
import GigHistory from "@/app/gigs/components/GigHistory";
import Feed from "@/app/gigs/components/Feed";
import GigFilters from "@/app/gigs/components/GigFilters";

const GigsPage = () => {
    const defaultGig= gigsData[0];
    const [selectedGig, setSelectedGig] = useState(defaultGig);

    const handleSelectGig = (job: any) => {
        setSelectedGig(job);
    };
    console.log(defaultGig);

    return(
        <div className="flex flex-col w-full">
            <GigFilters />
            <div className="flex w-full px-4">
                <div className="flex flex-col w-1/2 space-y-8 border-r border-stroke py-2">
                    {
                        gigsData.map((item) => (
                            <SingleGig gig={item} key={item.id} handleClick={() => handleSelectGig(item)}/>
                        ))
                    }
                </div>
                <div className="flex w-3/4 flex-col">
                    <GigDetails gig={selectedGig}/>
                    <div className="flex flex-col border border-stroke py-3 rounded-xl">
                        <AboutCreator gig={selectedGig}/>
                        <GigHistory/>
                        <Feed/>
                        <Skills/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GigsPage;