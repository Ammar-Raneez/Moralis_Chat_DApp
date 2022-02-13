import Head from 'next/head';

import Login from '../components/Login';

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="bg-black relative">
      <Head>
        <title>Metaverse Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Metaverse Dapp</h1>
    </div>
  )
}
