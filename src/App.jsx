import './App.css'
import Todo from './Todo'
import Actor from './Actor';
import Player from './Player';
import BookStore from './BookStore';


function App() {
  const actors = ['Shakib', 'Raj', 'Nisho', 'Shuvo'];
  const players = ['Shakib', 'Tamim', 'Miraj', 'Das'];
  const books = [
    {name : 'Biology', price : 150},
    {name : 'Physics', price : 250},
    {name : 'Chemistry', price : 500},
    {name : 'Mtah', price : 450},
    {name : 'English', price : 350}
  ]

  return (
    <>
      <h2>Vite + React</h2>
      <Person></Person>
      <Student name="Lijan" age='21'></Student>
      <Device name= 'laptop' price= '50000'></Device>
      <Todo task='learn html' isDone= {true}></Todo>
      <Todo task='learn react' isDone= {false}></Todo>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <BookStore books={books}></BookStore>

      {
        players.map(player => <Player player={player}></Player>)
      }

    </>
  )
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
    <div>
      <h2>This is device</h2>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  )
}

export default App
