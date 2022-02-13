import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="relative bg-black">
      <h1>Login</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-10">
        <Image
          src="https://avatars.githubusercontent.com/u/54928498?v=4"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />
        <button
          onClick={() => authenticate()}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
