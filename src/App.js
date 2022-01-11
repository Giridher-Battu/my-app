
import React from 'react';
import './App.css';
import Login from './components/Login';
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
        <div></div>
      <div className="some">
        <Login />
      </div>
      </QueryClientProvider>

  );
}

export default App;
