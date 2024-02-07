import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold">
          Welcome to <a href="https://risclog.com">riscLOG</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://tailwindcss.com/" className={styles.card}>
            <h3>TailwindCSS &rarr;</h3>
            <p>Learn about TailwindCSS on this page</p>
          </a>

          <a href="https://tw-elements.com/" className={styles.card}>
            <h3>TW Elements &rarr;</h3>
            <p>Ready to go Tailwind Elements.</p>
          </a>

          <a href="https://jestjs.io/" className={styles.card}>
            <h3 className="font-semibold">Jest &rarr;</h3>
            <p>
              Jest is a delightful JavaScript Testing Framework with a focus on
              simplicity.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
