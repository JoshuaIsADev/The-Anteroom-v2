import { useState } from 'react';

const initialItems = [
  {
    id: 1,
    description: 'Finish Anteroom v2 design',
    quantity: '',
    completed: true,
  },
  {
    id: 2,
    description: 'Convert the Anteroom into a React app',
    quantity: '',
    completed: false,
  },
  { id: 3, description: 'Pack passport', quantity: 1, completed: false },
];

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
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, completed: false, id: Date.now() };
    console.log(newItem);

    setDescription('');
    setQuantity('');
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h5>Add An Item</h5>
      <input
        type='text'
        placeholder=''
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='number'
        placeholder=''
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button>+</button>
    </form>
  );
}

function ToDoList() {
  return (
    <ul className='todo-list'>
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.completed ? { background: '#F6EA48' } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>&times;</button>
    </li>
  );
}

function Stats() {
  return <footer className='stats'>You have X items on your list</footer>;
}
