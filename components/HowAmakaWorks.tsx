import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const HowAmakaWorks = () =>{
    return(
        <Link href={'/'} className="flex items-center text-normal font-light">
            How AMAKA Works
            <GoLinkExternal />
        </Link>
    )
}

export default HowAmakaWorks;