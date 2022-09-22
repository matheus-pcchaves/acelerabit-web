import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Jobs, JobsContext } from "../../contexts/JobsContext";
import { Container, Content } from "./styles";

export function JobsTable() {

  const { jobs } = useContext(JobsContext)

  const navigate = useNavigate()

  function redirectToDetails(job: Jobs) {
    navigate(`/jobs/${job.id}`, {state: {job}})
  }
  
  return(
    <Content>
      <Container>
        <h2>Sua vaga está aqui!</h2>
        <table>   
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.serviceName}</td>
                <td>{job.companyName}</td>
                <td>{job.main_skill}</td>
                <td><button onClick={() => redirectToDetails(job)}>Saiba mais</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Content>
  )
}