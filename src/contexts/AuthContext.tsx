import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies } from 'nookies';
import { useNavigate } from "react-router-dom";

type User = {
    email: string;
}

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInCredentials) => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user;
    const navigate = useNavigate()

    useEffect(() => {
        const { 'acelerabit.token': token } = parseCookies()

        if(token) {
            api.get('/').then(response => {
                const { email } = response.data

                setUser({email})
            })
        }
    }, [])

    async function signIn({email, password}: SignInCredentials) {
        try {
            const response = await api.post('/login', {
                email, 
                password
            })

            const { access_token } = response.data

            setCookie(undefined, 'acelerabit.token', access_token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
            })
    
            setUser({
                email
            })

            api.defaults.headers['Authorization'] = `Bearer ${access_token}`

            console.log(user)
            console.log(response.data)
            navigate('/companies')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}
