'use client'
import React from 'react'
import {usePathname} from "next/navigation";
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import SearchCommand from "@/components/SearchCommand";

export const NavItems = () => {

    const pathName = usePathname();

    const isActive = (path: string) => {

        if(path === '/') return pathName === '/';

        return pathName.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({href, label}) => {

                if(label === "Search") return (
                    <li key={"search-trigger"}>
                        <SearchCommand
                        renderAs={"text"}
                        label={"Search"}
                        initialStocks={[]}
                        />
                    </li>
                )

                return <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors 
                    ${isActive(href) ? 'text-gray-100' : ``}`}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    )
}
