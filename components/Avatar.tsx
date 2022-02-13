import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

interface AvatarProps {
  username?: string
  logoutOnPress?: boolean
}

function Avatar({ username, logoutOnPress }: AvatarProps) {
  const { user, logout } = useMoralis()

  return (
    <Image
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user?.get('username')
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
