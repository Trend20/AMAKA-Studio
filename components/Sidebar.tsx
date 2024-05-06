"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {sidebarData} from "@/data/sidebar";
import {SidebarData} from "@/types/sidebar_data";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const pathname = usePathname();
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ key }: KeyboardEvent) => {
            if (!sidebarOpen || key !== "Escape") return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 lg:mt-20 mt-15 z-9999 flex h-screen border-r border-stroke lg:bg-transparent bg-white w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}


            <div
                className="no-scrollbar flex flex-col overflow-y-auto border-b border-bodydark pb-3 duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="px-4 lg:px-6">
                    <div>
                        <ul className="flex flex-col gap-1.5">
                            {
                                sidebarData.map((item: SidebarData) => (
                                    <li key={item.id}>
                                        <Link
                                            href={`/${item.name}`}
                                            className={`group relative capitalize space-x-5 flex items-center gap-2.5 rounded-lg py-1.5 px-4 font-light duration-300 ease-in-out hover:bg-[#b8c0ff] ${
                                                pathname.includes(`${item.name}`) && "bg-[#b8c0ff] dark:bg-meta-4"
                                            }`}
                                        >
                                            <Image src={item.imgUrl} alt={item.name} width={30} height={30}/>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className="flex flex-col justify-start">
                    <hr className="border border-stroke w-full"/>
                    <div className="flex ml-5 justify-start items-center px-4 lg:px-6">
                        <Image src="/images/editorial.png" alt="editorial" className="py-4" width={150}
                               height={150}/>
                    </div>
                    <hr className="border border-stroke w-full"/>
                    <div className="flex flex-col ml-5 justify-start items-start space-y-3 mt-5 px-4 lg:px-6">
                        <Image src="/images/appstore.png" alt="appstore" width={150} height={150}/>
                        <Image src="/images/playstore.png" alt="playstore" width={150} height={150}/>
                    </div>
                    <div className="flex flex-col mt-8 ml-5 justify-start items-start px-4 lg:px-6">
                        <span className="flex items-center space-x-2">
                            <Image src="/icons/facebook.svg" alt="facebook" width={20} height={20}/>
                            <Image src="/icons/instagram.svg" alt="instagram" width={20} height={20}/>
                            <Image src="/icons/twitter.svg" alt="twitter" width={20} height={20}/>
                        </span>
                    </div>
                    <div
                        className="flex flex-wrap gap-2 ml-5 px-4 lg:px-6 justify-start items-center text-bodydark2 font-light mt-5 text-sm">
                        <Link href={'/'}>About</Link> |
                        <Link href={'/'}>Copyright</Link> |
                        <Link href={'/'}>Creators</Link> |
                        <Link href={'/'}>Advertise</Link> |
                        <Link href={'/'}>Terms & Privacy</Link> |
                        <Link href={'/'}>Policy & Safety</Link>
                    </div>
                    <p className="ml-5 text-sm px-4 lg:px-6 text-bodydark2 font-light mt-5"> © 2023 Amaka LTD</p>
                </div>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
