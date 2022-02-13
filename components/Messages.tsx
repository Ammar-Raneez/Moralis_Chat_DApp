import React, { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';

import Message from './Message';
import SendMessage from './SendMessage';

// only show messages from last 15 minutes
const MIN_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    'Messages',

    // query for the Messages array sorted in ascending order of date
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-400">
        <p>You're up to date {user?.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
