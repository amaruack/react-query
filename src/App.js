import './App.css';

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {MainProducts} from "./components/MainProducts";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient()

export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <MainProducts/>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>

    );
}
