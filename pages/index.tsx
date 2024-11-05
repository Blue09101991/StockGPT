// pages/index.tsx
import Image from 'next/image';
import Head from 'next/head';
import Chatbot from '../components/Chatbot';
import logo from '../public/stockgpt-logo.png'; // adjust the path if needed
import styles from './Home.module.css'; // Import the CSS module for styling

const Home = () => {
  return (
    <>
      <Head>
        <title>Thoughtforms StockGPT</title>
        <meta name="description" content="Stock trading assistant powered by Thoughtforms StockGPT" />
      </Head>
      <main className={styles.main}>
        {/* Left Side: Logo and Text */}
        <div className={styles.leftSection}>
          <Image src={logo} alt="StockGPT Logo" width={200} height={200} />
          <h1>Welcome to StockGPT</h1>
          <p>AI-powered stock trading assistant to help you make better investment decisions.</p>
        </div>

        {/* Right Side: Chatbot */}
        <div className={styles.rightSection}>
          <Chatbot />
        </div>
      </main>
    </>
  );
};

export default Home;
