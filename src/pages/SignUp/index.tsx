import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container } from "./styles";

export function SignUp() {
    const [name, setName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    function redirectToSignIn() {
        navigate('/signIn')
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        api.post('/companies/', {
            name,
            cellphone,
            website,
            address,
            zipCode,
            email,
            password
        })
        .then(() => {
            alert('Cadastro realizado')
        })

        setName('')
        setCellphone('')
        setWebsite('')
        setAddress('')
        setZipCode('')
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <Header title="Encontre sua vaga" buttonTitle="Já tenho cadastro" setRedirection={redirectToSignIn}/>
            <Container onSubmit={handleSubmit}>
                <h2>Cadastre sua empresa</h2>
                <input placeholder="nome" type="name" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="telefone" type="text" value={cellphone} onChange={e => setCellphone(e.target.value)}/>
                <input placeholder="website" type="text" value={website} onChange={e => setWebsite(e.target.value)}/>
                <input placeholder="endereço" type="text" value={address} onChange={e => setAddress(e.target.value)}/>
                <input placeholder="CEP" type="text" value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>            
        </>  
    )
}