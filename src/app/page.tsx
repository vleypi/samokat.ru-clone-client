import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
        <Link href={'/auth'}>auth link</Link>
    </div>
  )
}
