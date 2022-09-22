import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue-light);
  color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: var(--background);
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Elements = styled.div`
  max-width: 2rem;
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--shape);
  font-weight: 600;

  p {
    margin: auto 2rem;
    padding: 0.5rem;
    cursor: default ;
  }

  button {
    background: var(--green);
    color: var(--shape);
    font-weight: 600;
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.25rem 2rem;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
    transition: 1s;
  }
`;