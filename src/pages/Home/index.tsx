import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { JobsTable } from "../../components/JobsTable";

export function Home() {

    const navigate = useNavigate()

    function redirectToSignUp() {
        navigate('/signUp')
    }
    
    return(
        <>
            <Header title="Encontre sua vaga" buttonTitle="Entre ou cadastre-se" setRedirection={redirectToSignUp}/>
            <JobsTable/>
        </>
    )
}