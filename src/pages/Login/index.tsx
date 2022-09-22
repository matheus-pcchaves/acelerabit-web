import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "./styles";

export default function Login() {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const data = {
            email, 
            password
        }

        await signIn(data)
    }

    const navigate = useNavigate()

    function redirectToSignUp() {
        navigate('/signUp')
    }

    return(
        <>
        <Header title="Não tem uma conta?" buttonTitle="Cadastre sua empresa" setRedirection={redirectToSignUp}/>
        <Container onSubmit={handleSubmit}>
            <h2>Login de empresas</h2>
            <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
        </Container>  
        </>      
    )
}