import { getAllCategories } from '@/services/getCategories'
import Link from 'next/link'

const getCategories = async () =>{
    const data = await getAllCategories()

    return data
}

const Home = async () => {

    const categories = await getCategories()

    return (
        <div>
            {categories.map((category)=>(
                <div key={category.label + '_'+category.image} className='mb-7'>
                    <p className='text-[28px] font-bold text-[#404040]'>{category.label}</p>
                    <div className='grid md:grid-cols-6 md:max-xl:grid-cols-5 md:max-lg:grid-cols-4 grid-cols-3 gap-3 mt-4'>
                        {category.options.map((option)=>(
                            <Link href={'/category/'+option.slug} key={option.slug} className='relative rounded-2xl cursor-pointer'>
                                <p className='absolute font-bold text-[#404040] top-3 left-3'>{option.label}</p>
                                <img src={option.image} className='rounded-2xl'/>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home