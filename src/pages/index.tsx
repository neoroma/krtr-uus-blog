import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'
import { Box, Button } from '@chakra-ui/react'

export default function Home() {
  const notify = () => toast.success('Successfully created!')

  return (
    <div>
      <Head>
        <title>Uus Korter Blog</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>
        <Box w="100%" h="400px" bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)" />
      </main>

      <div>
        <Button onClick={notify} colorScheme="blue" size="md">
          Make me a toast
        </Button>

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
