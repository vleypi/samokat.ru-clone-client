import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
        <div className='flex items-center  w-full bg-[#f2f2f2] py-3 px-4 rounded-3xl mb-12'>
            <BiSearch size={18} className={''}/>
            <input placeholder='Искать в Самокате' className='w-full group outline-none text-[14px] pl-[7px] font-bold bg-transparent' maxLength={100} type='search'/>
        </div>
    )
}

export default Search