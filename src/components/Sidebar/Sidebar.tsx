'use client'

import { useCategories } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { shallow } from "zustand/shallow"
import Categories from "./Categories/Categories"

const Sidebar = () => {

    const [categories,loading,getAllCategories] = useCategories(state => [
        state.categories, state.loading, state.getAllCategories
    ], shallow)

    useEffect(()=>{
        getAllCategories()
    }, [getAllCategories])

    return (
        <>
            <div className='bg-white w-[236px] p-4 pt-10 rounded-b-3xl'>
                <Link href={'/'}>
                    <Image src={'https://web.samokat.ru/images/logo.svg'} width={153} height={23} alt="logo" />
                </Link>
            </div>
            <div className='bg-white w-[236px] overflow-y-auto scrollbar-hide mt-6 h-full rounded-3xl p-4'>
                <Categories categories={categories} loading={loading}/>
            </div>
        </>
    )
}

export default Sidebar