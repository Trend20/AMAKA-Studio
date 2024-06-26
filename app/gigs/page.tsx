"use client"
import {useState} from "react";
import SingleGig from "@/app/gigs/components/SingleGig";
import GigDetails from "@/app/gigs/components/GigDetails";
import Skills from "@/components/Skills";
import AboutCreator from "@/app/gigs/components/AboutCreator";
import GigHistory from "@/app/gigs/components/GigHistory";
import Feed from "@/app/gigs/components/Feed";
import GigFilters from "@/app/gigs/components/GigFilters";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {gigsData} from "@/data/gigs";
import {useSearchContext} from "@/context/SearchContext";



const GigsPage = () => {
    const [gigs, setGigs] = useState<any[]>(gigsData);
    const [selectedGig, setSelectedGig] = useState<any>(gigs[0]);
    const { searchTerm } = useSearchContext();

    const filteredGigs = gigs.filter(
        (gig) =>
            gig.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gig.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    return(
        <div className="flex flex-col w-full">
            <ToastContainer />
            <GigFilters />
            <div className="flex w-full px-3 flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2 w-full lg:border-r border-stroke py-2 rounded-b-xl">
                    {
                        filteredGigs.map((item:any) => (
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