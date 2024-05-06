export interface Gig{
    id:number;
    profilePic: string;
    name: string;
    title:string;
    overview:string;
    location:string;
    hourlyRate:string;
    timestamp:string;
    bookmarked:boolean;
    roles: Role[];
    description:string;
}

interface Role {
    id:number;
    desc:string;
}