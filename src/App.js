import './App.css';
import Box from './comp/Box'
import Person from './comp/Person'
import ScoreBoard from './comp/ScoreBoard';
import Garage from './comp/Garage';

function App(){
  const name = "Mukilan"
  const age = 40
  const fruits = ["Apple", "Orange", "Mango", "Grape", "Guava"]
  const students = [
    {key: 1, value: "Mukilan"},
    {key: 2, value: "Manu"},
    {key: 3, value: "Anbu"}
  ]
  const items = [
    {title: "Watch", desc: "Titan Watch", price: "450.50"},
    {title: "Pen", desc: "Parker Pen", price: "600.50"}
  ]
  return(
    <>
    {
      students.map((student)=>{
        return <>
          {student.key} ===== {student.value} <br></br>
        </>
      })
    }
    <ol>
      {
        fruits.map((fruit)=>{
          return <li>{fruit}</li>
        })
      }
    </ol>

    {/* <Garage />
    <Garage length="5"/> */}
      {/* {
        name && age && 
        <h1>All the data are available</h1>
      }
      {
        name &&
        <h1>Name is {name} {name}</h1>
      }
      {
        age &&
        <h1>Age is {age}</h1>
      } */}
      {/* <ScoreBoard isScored="false" /> */}
    </>
  )
}

/*
function App() {
  const buttonClicked = () => {
    alert("I'm Clicked")
  }
  const buttonClicked2 = (event) => {
    console.log(event.target)
    event.target.value = "Button is Off"
    event.target.style = "color: red"
  }
  return (
    <div>
        <input type='button' value="Click On Me" onClick={ buttonClicked } /> <br></br>
        <input type='button' value="Button is On" onClick={ buttonClicked2 } />
    </div>
  );
}
*/

export default App;
