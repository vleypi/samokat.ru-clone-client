"use client"

import { ICategory } from '@/interfaces/ICategory'
import { useCategories } from "@/store"
import React from 'react'
import Category from './Category'
import { useParams } from 'next/navigation' 
import Loading from './Loading'
import { shallow } from 'zustand/shallow'
import { useEffect } from "react"



const Categories = () => {

    const params = useParams()

    const [categories,loading,getAllCategories] = useCategories(state => [
        state.categories, state.loading, state.getAllCategories
    ], shallow)

    useEffect(()=>{
        getAllCategories()
    }, [getAllCategories])


    return (
        <>
            {loading && Array(10).fill(<Loading />)}
            {categories.map((category)=>(
                <Category key={category.label} category={category} params={params}/>
            ))}
        </>
    )
}

export default Categories