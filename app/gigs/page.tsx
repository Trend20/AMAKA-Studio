import {gigsData} from "@/data/gigs";
import SingleGig from "@/app/gigs/components/SingleGig";
import GigDetails from "@/app/gigs/components/GigDetails";

const GigsPage = () =>{
    return(
        <div className="flex w-full px-4">
            <div className="flex flex-col w-1/2 space-y-8 border-r border-stroke py-2">
                {
                    gigsData.map((item)=>(
                        <SingleGig gig={item} key={item.id} />
                    ))
                }
            </div>
            <div className="flex w-1/2">
                <GigDetails />
            </div>
        </div>
    )
}

export default GigsPage;