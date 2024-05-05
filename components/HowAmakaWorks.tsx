import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const HowAmakaWorks = () =>{
    return(
        <Link href={'/'} className="flex items-center text-normal text-bodydark2 underline space-x-2 font-light">
            How AMAKA Works
            <i className="flex ml-3"><GoLinkExternal /></i>
        </Link>
    )
}

export default HowAmakaWorks;