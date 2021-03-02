import Head from 'next/head'

import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
          name="Colby Fayock"
          tagline="Helping others to learn by doing!"
          role="Developer Advocate @ Applitools"
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content="Hey, I'm a new post!"
              date="3/2/2021"
          />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all of my tweets!"
              date="2/26/2021"
              />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all of my tweets!"
              date="2/26/2021"
              />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all of my tweets!"
              date="2/26/2021"
              />
          </li>
        </ul>

        <PostForm />

      </main>
    </div>
  )
}
