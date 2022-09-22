import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Header } from '../../components/Header/index';
import { Container, Content } from './styles';

export function JobDetails() {

    const navigate = useNavigate()

    function redirectToLogin() {
        navigate('/signIn')
    }

    const params = useParams() 

    const [jobs, setJobs] = useState('')

    useEffect(() => {
        if (params.id) {
            api.get(`/jobs/${params.id}`)
            .then(response => setJobs(response.data.description))
        }
    })

    return (
        <>
        <Header title="Encontre sua vaga" buttonTitle="Entre ou cadastre-se" setRedirection={redirectToLogin}/>
        <Container>
            <Content>{jobs} </Content>

        </Container>
        </>
    )
}