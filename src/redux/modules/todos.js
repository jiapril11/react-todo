const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const CHANGE_ISDONE_TODO = "todos/CHANGE_ISDONE_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

export const changeIsdoneTodo = (todo) => {
  return {
    type: CHANGE_ISDONE_TODO,
    todo,
  };
};

const initialState = [
  {
    id: 1,
    title: "장보기",
    content: "우유, 계란, 식빵, 과일 구매하기",
    isDone: false,
  },
  {
    id: 2,
    title: "운동",
    content: "헬스장 1시간 - 유산소 30분, 근력운동 30분",
    isDone: false,
  },
  {
    id: 3,
    title: "병원 예약",
    content: "다음 주 화요일 오후 치과 예약 전화하기",
    isDone: true,
  },
  {
    id: 4,
    title: "청소기 돌리기",
    content: "거실, 방, 화장실 청소기 및 걸레질",
    isDone: true,
  },
  {
    id: 5,
    title: "독서",
    content: "클린코드 4장까지 읽기",
    isDone: true,
  },
  
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.todoId);
    case CHANGE_ISDONE_TODO:
      return state.map((item) =>
        item.id !== action.todo.id
          ? item
          : { ...item, isDone: !action.todo.isDone }
      );
    default:
      return state;
  }
};

export default todos;
