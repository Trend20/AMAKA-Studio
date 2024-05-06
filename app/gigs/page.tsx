"use client"
import {useEffect, useState} from "react";
import SingleGig from "@/app/gigs/components/SingleGig";
import GigDetails from "@/app/gigs/components/GigDetails";
import Skills from "@/components/Skills";
import AboutCreator from "@/app/gigs/components/AboutCreator";
import GigHistory from "@/app/gigs/components/GigHistory";
import Feed from "@/app/gigs/components/Feed";
import GigFilters from "@/app/gigs/components/GigFilters";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSearchQuery from "@/hooks/useSearchQuery";
import {gigsData} from "@/data/gigs";



const GigsPage = () => {
    const gigData = JSON.parse(localStorage.getItem("gigs") || "{}");
    const [searchQuery] = useSearchQuery();
    const [gigs, setGigs] = useState<any[]>(gigData);
    const [selectedGig, setSelectedGig] = useState<any>(gigs[0]);
    const [filteredData, setFilteredData] = useState<any>([]);

    console.log(gigData)

    // select gig
    const handleSelectGig = (gig: any) => {
        setSelectedGig(gig);
    };

    // delete gig
    const handleDeleteGig = (id:any) => {
        const updatedGigs = gigs?.filter((gig:any) => gig.id !== id);
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

    // bookmark gig
    const handleBookmarkClick = (gigId:any) => {
        const updatedJobs = gigs.map(gig => {
            if (gig.id === gigId) {
                return { ...gig, bookmarked: !gig.bookmarked };
            }
            return gig;
        });
        setGigs(updatedJobs);
    };

    useEffect(() => {
        // Dump data to local storage when the component mounts
        localStorage.setItem('gigs', JSON.stringify(gigsData));
    }, []);

    useEffect(() => {
        const filteredGigs = gigs.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredGigs);
    }, [searchQuery, gigs]);

    console.log(filteredData);


    return(
        <div className="flex flex-col w-full">
            <ToastContainer />
            <GigFilters />
            <div className="flex w-full px-3 flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 w-full lg:border-r border-stroke py-2 rounded-b-xl">
                    {
                        filteredData.map((item:any) => (
                            <SingleGig gig={item} key={item.id} deleteGig={handleDeleteGig} selectedItem={selectedGig} handleClick={() => handleSelectGig(item)}/>
                        ))
                    }
                </div>
                <div className="lg:flex lg:w-3/4 w-full flex-col">
                    <GigDetails gig={selectedGig} handleBookmarkClick={handleBookmarkClick}/>
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