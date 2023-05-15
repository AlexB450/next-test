import '@/app/assets/styles/globals.css'
import AuthProvider from '@/app/provider/AuthProvider'
import { PostsProvider } from '@/app/provider/PostsProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'

const queryClient = new QueryClient({})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<PostsProvider>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</PostsProvider>
		</QueryClientProvider>
	)
}
