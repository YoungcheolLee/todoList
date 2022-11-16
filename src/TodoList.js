import { useState } from "react";

const TodoList = () => {
  //List에 뿌려줄 useState();
  const [todoList, setTodoList] = useState([]);

  //input=text에 적은 내용의 useState();
  const [input, setInput] = useState();

  //수정하기 useState();
  //수정중인지? 수정중이 아닌지?? 판단
  const [isEdit, setIsEdit] = useState(false);

  //수정하기 input 데이터 컨트롤할 state
  //useState 인자값 안에 input을 넘어줌으로써 수정하기 전 데이터를 가져옴
  const [modifyInput, setModifyInput] = useState();

  //toggleIsEdit 은 원래있던 isEdit 값을 반전시켜줌,
  //수정하기 폼을 노출시키기 위한 기능
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // controlled element > 제어되는 요소 > input 값, 즉 사용자가 입력 한 값을 바로 넣지않고, 관리하여 넣는다.
  const handleInputChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const onAddModify = () => {};

  const onAdd = () => {
    setTodoList((preState) => {
      // console.log(preState);
      return [input, ...preState];
    });
  };

  const onRemove = (idx) => {
    const newTodoList = todoList.filter((item, itemIdx) => itemIdx !== idx);
    setTodoList(newTodoList);
  };

  const handleModifyInput = (e) => {
    setModifyInput(e.target.value);
  };

  // const onRemove = (idx) => {
  //   const newTodoList = todoList.filter((item, itemIdx) =>
  //     itemIdx === idx ? false : true
  //   );
  //   setTodoList(newTodoList);
  // };

  // const onRemove = (idx) => {
  //   const newTodoList = todoList.filter((item, itemIdx) => {
  //     if (itemIdx === idx) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   setTodoList(newTodoList);
  // };

  return (
    <div>
      <h2>금일 할일 목록</h2>
      <ul>
        {isEdit ? (
          <li>
            수정할내용:{" "}
            <input
              type="text"
              value={modifyInput}
              onChange={handleModifyInput}
            />
            <button onClick={() => onAddModify()}> 저장 </button>
            <button onClick={() => toggleIsEdit()}> 취소 </button>
          </li>
        ) : (
          <>
            {todoList.map((item, idx) => (
              <li key={idx}>
                {item}
                <button onClick={() => onRemove(idx)}> 삭제 </button>
                <button onClick={() => toggleIsEdit()}> 수정하기 </button>
              </li>
            ))}
          </>
        )}
      </ul>
      임무추가:
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => onAdd()}>저장</button>
    </div>
  );
};

export default TodoList;

//state를 이용해서. state에 input e.target.value 내려줘야돼.
