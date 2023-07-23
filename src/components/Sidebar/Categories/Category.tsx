import { ICategory } from "@/interfaces/ICategory"
import { useState } from 'react'
import Link from "next/link"


type Props = {
    category: ICategory,
    params: {slug?: string}
}


const Category = ({category,params}: Props) => {

    const [opened,setOpened] = useState<boolean>(false)

    const handler = () =>{
        setOpened(!opened)
    }

    return (
        <>
            <div className="flex items-center py-[4px] cursor-pointer group select-none" onClick={handler}>
                <img className="w-[32px] h-[40px] rounded-lg group-hover:opacity-90" src={category.image}/>
                <p className=" text-[#808080] text-[14px] font-bold ml-4 group-hover:text-black">{category.label}</p>
            </div>
            <div className="flex flex-col pl-[32px]">
                {opened && category.options.map((option)=>(
                    <Link 
                        key={option.slug} 
                        href={`/category/${option.slug}`} 
                        className={`
                            text-[#808080] 
                            text-[14px] 
                            font-bold ml-4 
                            group-hover:text-black 
                            mb-[10px] 
                            hover:text-black 
                            ${params.slug === option.slug && "text-black"}
                        `
                        }>
                            {option.label}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Category