import Image from 'next/image';
import Head from 'next/head';
import Chatbot from '../components/Chatbot';
import logo from '../public/stockgpt-logo.png'; // adjust the path if needed

const Home = () => {
  return (
    <>
      <Head>
        <title>Thoughtforms StockGPT</title>
        <meta name="description" content="Stock trading assistant powered by Thoughtforms StockGPT" />
      </Head>
      <main
        style={{
          display: 'flex',
          minHeight: '80vh',
          alignItems: 'center',
          justifyContent: 'space-between', // Aligns content to left and right
          padding: '2rem',
        }}
      >
        {/* Left Side: Logo and Text */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', // Aligns to the left side of the screen
            padding: '2rem',
          }}
        >
          <Image src={logo} alt="Thoughtforms StockGPT Logo" width={200} height={200} />
          <h1 style={{ fontSize: '2.5rem', marginTop: '1.5rem' }}>
            Welcome to Thoughtforms StockGPT
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#4a5568', marginTop: '1rem' }}>
            Your intelligent stock trading assistant, here to help you navigate the markets.
          </p>
        </div>

        {/* Right Side: Chatbot */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Chatbot />
        </div>
      </main>
    </>
  );
};

export default Home;
