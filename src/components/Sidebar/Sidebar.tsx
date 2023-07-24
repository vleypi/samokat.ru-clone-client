'use client'

import { useCategories } from "@/store"
import Image from "next/image"
import Link from "next/link"
import Categories from "./Categories/Categories"

const Sidebar = () => {

   

    return (
        <>
            <div className='bg-white p-4 pt-10 rounded-b-3xl w-full'>
                <Link href={'/'}>
                    <Image src={'https://web.samokat.ru/images/logo.svg'} width={153} height={23} alt="logo" />
                </Link>
            </div>
            <div className='bg-white overflow-y-auto scrollbar-hide mt-6 h-full rounded-3xl p-4 w-full'>
                <Categories />
            </div>
        </>
    )
}

export default Sidebar