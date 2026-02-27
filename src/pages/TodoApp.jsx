import Inner from "../components/Inner";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import { media } from "../styles/breakpoints";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minMax(0, 1fr));
  gap: 1rem;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export default function TodoApp() {
  return (
    <main>
      <Inner>
        <TodoForm />
        <StyledSection>
          <TodoList isDoneState={false} />
          <TodoList isDoneState={true} />
        </StyledSection>
      </Inner>
    </main>
  );
}
