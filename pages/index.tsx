import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import Header from '../components/Header';
import Login from '../components/Login';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
