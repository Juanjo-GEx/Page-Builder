import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header'
import Footer from './components/Footer'

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
