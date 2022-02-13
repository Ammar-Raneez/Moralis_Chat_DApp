import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
  const { user } = useMoralis();

  return (
    <div>
      <div className="text-pink-500">
        {/* tailwind is mobile first - by default hidden, on larger screen inline-grid */}
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://avatars.githubusercontent.com/u/54928498?v=4"
            layout="fill"
            className="rounded-full"
          />
        </div>

        <div>
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">
            Welcome to the Metaverse
          </h1>
          <h2 className="text-5xl font-bold truncate">
            {user?.getUsername()}
          </h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
