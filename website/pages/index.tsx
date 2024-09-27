import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Button from "../components/Button";
import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface Release {
  tag_name: string;
  name: string;
  body: string;
  html_url: string;
}

interface HomeProps {
  latestRelease: Release;
}

const Home: React.FC<HomeProps> = ({ latestRelease }) => {
  return (
    <Layout>
      <Head>
        <title>LiSA - Anime & Manga Streaming and Download</title>
        <meta name="description" content="LiSA is a desktop application for streaming and downloading your favourite Anime & Manga." />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <div className={styles.circle}>
            <Image
              className={styles.logo}
              src="/loader_logo.png"
              alt="LiSA Logo"
              width={200}
              height={200}
              priority
            />
            <svg viewBox="0 0 100 100" className={styles.loaderCircle} xmlSpace="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
        </div>

        <h1 className={styles.title}>LiSA</h1>
        <p className={styles.description}>
          A Native app for seamless Anime & Manga streaming, reading, and downloading.
          <br />
          Enjoy your favorite series anytime, anywhere with ease.
        </p>

        <section className={styles.latestRelease}>
          <h2>Latest Release: {latestRelease.tag_name}</h2>
          <h3>{latestRelease.name}</h3>
          <div className={styles.releaseNotes}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({node, ...props}) => (
                  <img style={{maxWidth: '100%', height: 'auto'}} {...props} alt={props.alt || ''} />
                )
              }}
            >
              {latestRelease.body}
            </ReactMarkdown>
          </div>
          <Button href={latestRelease.html_url} className={styles.button}>
            Download Latest Release
          </Button>
        </section>

        <section className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li>User Friendly Interface</li>
            <li>Download anime and manga from supported websites</li>
            <li>Batch Download</li>
            <li>Stream anime on the inbuilt player and external video players</li>
            <li>Read Manga in the inbuilt E-Reader</li>
            <li>Explore anime & Manga based on different filters</li>
            <li>Download Manager</li>
            <li>Library to view pre-downloaded Manga and Chapters</li>
            <li>Recommendation System</li>
          </ul>
        </section>

        <section className={styles.contribute}>
          <h2>Contribute</h2>
          <p>Contributions, issues, and feature requests are welcome!</p>
          <Button href="https://github.com/Cosmicoppai/LiSA" className={styles.button}>
            View on GitHub
          </Button>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/Cosmicoppai/LiSA/releases/latest')
  const latestRelease = await res.json()

  return {
    props: {
      latestRelease,
    },
    revalidate: 3600, // Revalidate every hour
  }
}

export default Home