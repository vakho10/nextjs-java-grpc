import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [name, setName] = useState("John Doe");
  const [message, setMessage] = useState("")

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setName(e.currentTarget.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(json => setMessage(json.message))
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Client App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Enter name and click sent button below
        </p>

        <div className={styles.grid}>
          <form onSubmit={handleSubmit}>
            <input placeholder="Enter your name here" type="text" name="name" value={name} onChange={handleChange} />
            <button type="submit">Submit &raquo;</button>
          </form>
        </div>
        <div className={styles.grid}>
          <p>Output = {message || "Nothing"}</p>
        </div>
      </main>
    </div>
  )
}

export default Home
