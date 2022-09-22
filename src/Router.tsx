import { Routes, Route } from 'react-router-dom';
import { JobDetails } from './pages/JobDetails/index';
import Login from './pages/Login';
import { Companies } from './pages/Companies';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jobs/:id' element={<JobDetails/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/sigIn' element={<Login/>}/>
            <Route path='/companies' element={<Companies/>}/>
        </Routes>
    )
}