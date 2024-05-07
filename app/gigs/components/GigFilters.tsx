"use client"
import React, { useState } from 'react';
import GigSelect from "@/app/gigs/components/GigSelect";

const amountOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const experienceOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const gigTypeOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const contentTypeOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const locationOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const GigFilters = () =>{
    const [amountOption, setAmountOption] = useState('Earned amount');
    const [experienceOption, setExperienceOption] = useState('Experience level');
    const [gigOption, setGigOption] = useState('Gig Type');
    const [contentOption, setContentOption] = useState('Content Type');
    const [locationOption, setLocationOption] = useState('Location');
    return(
        <div className="flex py-5 border-b w-full flex-wrap gap-2.5 lg:items-center items-start border-stroke lg:space-x-5 space-x-3 lg:px-8 px-4 ml-3">
            <GigSelect
                options={amountOptions}
                selectedOption={amountOption}
                setSelectedOption={setAmountOption}
            />
            <GigSelect
                options={experienceOptions}
                selectedOption={experienceOption}
                setSelectedOption={setExperienceOption}
            />
            <GigSelect
                options={gigTypeOptions}
                selectedOption={gigOption}
                setSelectedOption={setGigOption}
            />
            <GigSelect
                options={contentTypeOptions}
                selectedOption={contentOption}
                setSelectedOption={setContentOption}
            />
            <GigSelect
                options={locationOptions}
                selectedOption={locationOption}
                setSelectedOption={setLocationOption}
            />
            <hr className="border border-stroke h-7"/>
            <button className="flex rounded-full outline-0 px-4 py-2 border border-stroke">All filters</button>
        </div>
    )
}

export default GigFilters;