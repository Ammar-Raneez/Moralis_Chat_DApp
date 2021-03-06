import React from 'react';
import { useMoralis } from 'react-moralis';

function ChangeUsername() {
  const { user, setUserData, isUserUpdating } = useMoralis()

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user?.getUsername()})`
    )
    if (!username) {
      return
    }

    setUserData({ username })
  }

  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        disabled={isUserUpdating}
        className="hover:text-pink-700"
        onClick={setUsername}
      >
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
