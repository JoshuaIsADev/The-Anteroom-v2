export default function ToDo() {
  return (
    <div>
      <Logo />
      <Form />
      <ToDoList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h2>ToDo</h2>;
}

function Form() {
  return (
    <div className='form'>
      <h5>Add An Item</h5>
    </div>
  );
}
function ToDoList() {
  return <div className='todo-list'>List</div>;
}

function Stats() {
  return <footer className='stats'>You have X items on your list</footer>;
}
