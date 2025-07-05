import './App.css'
import Todo from './Todo'
import BookStore from './BookStore';
import Actors from './Actors';
import Players from './Players';
import Counter from './Counter';
import Users from './Users';


function App() {
  const actors = ['Shakib', 'Raj', 'Nisho', 'Shuvo'];
  const players = [
    {name : 'Shakib' , age : 40},
    {name : 'Tamim' , age : 42},
    {name : 'jakir' , age : 30},
    {name : 'Das' , age : 32},
    {name : 'Miraj' , age : 28}
  ];
  const books = [
    {name : 'Biology', price : 150},
    {name : 'Physics', price : 250},
    {name : 'Chemistry', price : 500},
    {name : 'Mtah', price : 450},
    {name : 'English', price : 350}
  ];



  return (
    <>
      <h1>Explore React Core Concepts</h1>

      <Person></Person>
      <hr />
      <Todo task='Learn HTML' isDone= {true}></Todo>
      <Todo task='Learn React' isDone= {false}></Todo>
      <Student name="Lijan" age='21'></Student>
      <Device name= 'laptop' price= '50000'></Device>
      <Actors actors={actors}></Actors>

      <BookStore books={books}></BookStore>
      <Players players={players}></Players>


      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert('button again clicked')}>Click me again</button>
      <button onClick={() => handleClickAgain(5)}>click me more</button>

      <Counter></Counter>
      <Users></Users>

    </>
  )
}

function handleClick(){
  alert('button clicked')
}
const handleClickAgain = (num) => {
  alert(num + 3)
}

function Person() {
  const age = 21;
  const money = 100;
  const person = { name: 'Lijan', address: 'Dhaka'}
  return <h3>I am {person.name} with age : {age}. I live in {person.address}. I have {money}Tk </h3>
}

function Student(props) {
  return (
    <div className='student'>
      <h3>This is student</h3>
      <h4>Name: {props.name}</h4>
      <h4>age: {props.age}</h4>
    </div>
  )
}

const {name, price} = {name: 'laptop', price: 50000}
function Device({name, price}){
  return(
    <div className='device'>
      <h2>This is device</h2>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  )
}

export default App
