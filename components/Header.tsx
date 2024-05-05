"use client"
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import HowAmakaWorks from "@/components/HowAmakaWorks";
import React from "react";
import CreateGig from "@/app/gigs/components/CreateGig";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
                <div className="flex items-center space-x-3 w-full">
                    <Link
                        href="/"
                        className="flex items-center justify-center"
                    >
                        <Image src="/logo.png" alt={'logo'} width={100} height={100}/>
                    </Link>
                    <HowAmakaWorks/>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <RxHamburgerMenu/>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Link className="block flex-shrink-0 lg:hidden" href="/">
                        <Image
                            width={32}
                            height={32}
                            src={"/logo.png"}
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center space-x-5 w-full justify-end">
                    <div className="hidden sm:block">
                        <form className="bg-bodydark1 space-x-5 w-52 flex items-center rounded-full p-3 px-4">
                            <Image width={100} height={100} src={"/icons/search.svg"} alt="search icon" />
                            <input
                                type="text"
                                placeholder="Search AMAKA"
                                className="font-light bg-transparent focus:outline-none xl:w-125"
                            />
                        </form>
                    </div>
                    <div className="flex items-center space-x-3">
                        <CreateGig />
                        <DarkModeSwitcher/>
                        <DropdownUser/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;