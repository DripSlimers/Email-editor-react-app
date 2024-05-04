import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

export function Provider({ children }: PropsWithChildren) {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>Provider</QueryClientProvider>
	)
}
