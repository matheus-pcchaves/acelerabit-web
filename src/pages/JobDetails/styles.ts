import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 2rem;
  padding: 4rem;
`;

export const Content = styled.span`
  margin: 1rem;
 
  display: flex;
  margin: 1.5rem;
  padding: 2rem;
  border: 0;
  border-radius: 0.25%;
  background: var(--shape);
  color: var(--text-title);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  } 
`