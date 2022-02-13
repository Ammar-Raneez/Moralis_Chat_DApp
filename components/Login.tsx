import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-10">
        <Image
          src="https://avatars.githubusercontent.com/u/54928498?v=4"
          height={200}
          width={200}
          className="object-cover rounded-full"
        />
        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login;
