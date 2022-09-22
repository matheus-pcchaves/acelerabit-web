import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { JobsProvider } from './contexts/JobsContext';
import { Router } from './Router';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AuthProvider>
        <JobsProvider>
          <Router/>
        </JobsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
