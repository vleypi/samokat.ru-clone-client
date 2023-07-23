import { ICategory } from '@/interfaces/ICategory'
import React from 'react'
import Category from './Category'
import { useParams } from 'next/navigation' 
import Loading from './Loading'


type Props = {
    categories: ICategory[],
    loading: boolean
}

const Categories = ({categories,loading}: Props) => {

    const params = useParams()

    return (
        <>
            {categories.map((category)=>(
                <Category key={category.label} category={category} params={params}/>
            ))}
        </>
    )
}

export default Categories