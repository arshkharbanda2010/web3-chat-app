import React from 'react'
import Image from 'next/image'

function Login() {
    return (
        <div className='bg-black relative'>
            <h1>i am the login screen</h1>
            <div className='flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-4'>
                <Image className='object-cover rounded-full' src='https://i.ibb.co/JHsLBLx/682525ae-7508-489a-bd33-63f2960eb514.jpg'
                    height={200} width={200} />

                <button className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the metaverse</button>
            </div>
            <div className='w-full h-screen'>
                <Image src='https://links.papareact.com/55n' layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default Login
