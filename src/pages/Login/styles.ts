import styled from "styled-components";

export const Container = styled.form`
  margin: 4rem ;
  padding: 1rem;
  height: 2rem;

  h2 {
    margin: 1rem;
    color: var(--text-body);
  }

  input {
    display: flex;
    justify-content: center;
    border: 0;
    border-radius: 0.25rem;
    margin: 1rem;
    width: 35%;
    padding: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    border: 0;
    border-radius: 0.25rem;
    margin: 1rem;
    width: 35%;
    padding: 1rem;
    background: var(--green);
    color: var(--shape);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    transition: 1s;
    opacity: 0.7;
  }
`