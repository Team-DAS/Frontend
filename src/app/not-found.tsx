"use client"
import Link from 'next/link'
import Image from 'next/image'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    return (
        <div className='flex-1 flex items-center justify-center gap-20'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-4xl font-bold'>Oops! No hay nada aquí</h1>
                <p className='text-gray-600'>Lo sentimos, no pudimos encontrar la página que buscas.</p>
                <div className='flex gap-4 text-center self-start'>
                    <Link href="/" className='bg-blue-600 text-white px-5 w-28 py-2 rounded-md'>Inicio <ArrowRightAltOutlinedIcon/></Link>
                    <button onClick={() => router.back()} className=' text-blue-600 shadow-md px-5 w-28 py-2 rounded-md'>Atrás </button>
                </div>
            </div>
            <div>
                <Image src="/404-Error.png" width={700} height={400} alt="404 Not Found" />
            </div>

        </div>
    )
}