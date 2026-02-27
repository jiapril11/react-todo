import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 16px;

  & > div {
    position: relative;
    width: 100%;
    max-width: 700px;
    min-width: 300px;
    margin: 0 auto;
    padding: 2.6rem 1rem 1rem 1rem;
    border: 2px solid #d4634f;
    border-radius: 4px;
    box-shadow: 0 0.5rem 1rem #e77a7a42;
  }

  & h2 {
    margin: 0 0 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & p {
    max-height: 100px;
    margin: 0;
    overflow: auto;
    font-size: 1rem;
  }

  & button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    font-size: 0.85rem;
    font-weight: 700;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #d4634f;
    }
  }
`;

const StyledBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  color: #777;

  & p {
    font-size: 0.9rem;
  }
`;

export default function Todo() {
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const foundTodo = todos.find((todo) => String(todo.id) === params.id);
  const navigate = useNavigate();
  return (
    <StyledArticle>
      <div>
        <h2>{foundTodo.title} </h2>

        <p>{foundTodo.content}</p>

        <StyledBottomDiv>
          <p>상태: {foundTodo.isDone ? "완료" : "미완료"}</p>
          <p>ID: {foundTodo.id}</p>
        </StyledBottomDiv>

        <button onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft />
          이전으로
        </button>
      </div>
    </StyledArticle>
  );
}
