import Image from "next/image"

const Sidebar = () => {
    return (
        <>
            <div className='bg-white w-[calc(350px-48px)] p-4 pt-8 rounded-b-3xl'>
                <Image src={'https://web.samokat.ru/images/logo.svg'} width={153} height={23} alt="logo" />
            </div>
            <div className='bg-white w-[calc(350px-48px)] mt-6 h-full rounded-3xl'>
                sadasd
            </div>
        </>
    )
}

export default Sidebar