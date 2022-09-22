import styled from "styled-components";

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem, 1rem;
`;

export const Container = styled.div`
  margin-top: 4rem;

  h2 {
    color: var(--text-body)
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      button {
        padding: 0.5rem 1.5rem;
        border: 0;
        background: var(--green);
        color: var(--shape);
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.25rem;
      }

      button:hover {
        transition: 1s;
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
`