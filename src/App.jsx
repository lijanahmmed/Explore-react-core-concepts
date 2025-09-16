import './App.css'
import Todo from './Todo'
import BookStore from './BookStore';
import Actors from './Actors';
import Players from './Players';
import Counter from './Counter';
import Users from './Users';
import Batsman from './Batsman';
import { Suspense } from 'react';
import Posts from './Posts';

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}


function App() {
  const fetchPromise = fetchPosts();

  const actors = ['Shakib', 'Raj', 'Nisho', 'Shuvo'];
  const players = [
    { name: 'Shakib', age: 40 },
    { name: 'Tamim', age: 42 },
    { name: 'jakir', age: 30 },
    { name: 'Das', age: 32 },
    { name: 'Miraj', age: 28 }
  ];
  const books = [
    { id: 1, name: 'Biology', price: 150 },
    { id: 2, name: 'Physics', price: 250 },
    { id: 3, name: 'Chemistry', price: 500 },
    { id: 4, name: 'Math', price: 450 },
    { id: 5, name: 'English', price: 350 }
  ];


  return (
    <>
      <h1>Explore React Core Concepts</h1>

      <Person></Person>
      <hr />
      <Todo task='Learn HTML' isDone={true}></Todo>
      <Todo task='Learn React' isDone={false}></Todo>
      <Student name="Lijan" age='21' department="CSE" semester="6th"></Student>
      <Device name='laptop' price='50000'></Device>
      <Actors actors={actors}></Actors>

      <BookStore books={books}></BookStore>
      <Players players={players}></Players>
      <Batsman></Batsman>


      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert('button again clicked')}>Click me again</button>
      <button onClick={() => handleClickAgain(5)}>click me more</button>

      <Counter></Counter>
      <Users></Users>
      <Suspense fallback={<h3>Posts are loading...</h3>}>
        <Posts fetchPromise={fetchPromise}></Posts>
      </Suspense>

    </>
  )
}

function handleClick() {
  alert('button clicked')
}
const handleClickAgain = (num) => {
  alert(num + 3)
}

function Person() {
  const age = 21;
  const money = 100;
  const person = { name: 'Lijan', address: 'Dhaka' }
  return <h3>I am {person.name} with age : {age}. I live in {person.address}. I have {money}Tk </h3>
}

function Student({ name, age, department, semester }) {
  return (
    <div className='student'>
      <h3>This is student</h3>
      <h4>Name: {name}</h4>
      <h4>age: {age}</h4>
      <h4>Department : {department}</h4>
      <h4>Semester : {semester}</h4>
    </div>
  )
}

// const {name, price} = {name: 'laptop', price: 50000}
function Device({ name, price }) {
  return (
    <div className='device'>
      <h2>This is device</h2>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  )
}


export default App
