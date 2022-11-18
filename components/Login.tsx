import React from 'react'
import { useMetamask } from '@thirdweb-dev/react'

function Login() {
    const connectWithMetamask = useMetamask()

    return (
        <div className='flex flex-col items-center mb-10'>
            <img src='https://img.freepik.com/premium-vector/lottery-concept-illustration_109722-2608.jpg?w=500' alt='Login' className='rounded-full h-56 w-56 mb-10' />
            <h1 className='text-6xl text-white font-bold'>Lottery Draw</h1>
            <h2 className='text-white'>Get Started by logging in with your Metamask</h2>
            <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg'>Login with Metamask</button>
        </div>
    )
}

export default Login