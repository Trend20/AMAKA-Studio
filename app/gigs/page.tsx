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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GigsPage = () => {
    const defaultGig= gigsData[0];
    const [selectedGig, setSelectedGig] = useState(gigsData[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [gigs, setGigs] = useState(gigsData);

    // select gig
    const handleSelectGig = (job: any) => {
        setSelectedGig(job);
    };

    // delete gig
    const handleDeleteGig = (id:any) => {
        const updatedGigs = gigs.filter((gig) => gig.id !== id);
        if (selectedGig.id === id) {
            setSelectedGig(updatedGigs[0]);
        }
        toast.success("Gig deleted successfully.!", {
            position: "top-right",
            theme:'colored'
        });
        console.log(updatedGigs[0]);
        setGigs(updatedGigs);
    };

    console.log(defaultGig);

    return(
        <div className="flex flex-col w-full">
            <ToastContainer />
            <GigFilters />
            <div className="flex w-full px-3 flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 w-full lg:border-r border-stroke py-2 rounded-b-xl">
                    {
                        gigs.map((item) => (
                            <SingleGig gig={item} key={item.id} deleteGig={handleDeleteGig} selectedItem={selectedGig} handleClick={() => handleSelectGig(item)}/>
                        ))
                    }
                </div>
                <div className="lg:flex lg:w-3/4 w-full flex-col">
                    <GigDetails gig={selectedGig}/>
                    <div className="flex flex-col w-full border border-stroke py-3 rounded-xl">
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