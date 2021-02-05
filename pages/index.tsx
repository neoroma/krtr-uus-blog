import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const notify = () => toast.success('Successfully created!')

  return (
    <div>
      <Head>
        <title>Uus Korter Blog</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>Dzz</main>

      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: 'green',
                secondary: 'white'
              }
            }
          }}
        />
      </div>

      <footer></footer>
    </div>
  )
}
