import { useState } from 'react';

export default function ToDo() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className='container'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ToDoList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h2>ToDo</h2>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, completed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription('');
    setQuantity('');
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <h5>Add An Item</h5>
      <div className='todo-form'>
        <input
          type='text'
          placeholder=''
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className='todo-input-qty'
          type='number'
          placeholder=''
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button>+</button>
      </div>
    </form>
  );
}

function ToDoList({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={item.id}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        className='todo-checkbox'
        type='checkbox'
        value={item.completed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        className='todo-list'
        style={item.completed ? { background: '#F6EA48' } : {}}
      >
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length) return <h5 className='footer'>Please add an item</h5>;

  const numItems = items.length;
  const numCompleted = items.filter((item) => item.completed).length;
  const percentCompleted = Math.round((numCompleted / numItems) * 100);

  return (
    <footer className='stats'>
      <h5>
        {percentCompleted === 100
          ? 'All completed. Congrats!'
          : `You have ${numItems} items and have completed ${numCompleted}
        (${percentCompleted}%)`}
      </h5>
    </footer>
  );
}
