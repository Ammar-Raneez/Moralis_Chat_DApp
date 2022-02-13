import React, { MouseEvent, useState } from 'react';
import { useMoralis } from 'react-moralis';

interface SendMessageProps {
  endOfMessagesRef: any;
}

function SendMessage({ endOfMessagesRef }: SendMessageProps) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!message) {
      return;
    }

    // Creates a table called 'Messages' in the Moralis dashboard and stores
    // the object
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages.save({
      username: user?.getUsername(),
      ethAddress: user?.get('ethAddress'),
      message
    }).then((message: string) => {

    }, (err: Error) => {
      console.log(err.message);
    });

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMessage('');
  }

  return (
    <form className="flex fixed bottom-10 px-6 py-4 bg-black opacity-80 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        type="text"
        className="pr-5 flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        placeholder={`Enter a Message ${user?.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="font-bold text-pink-500"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
