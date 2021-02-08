import { useState, useEffect } from 'react'
import List from './components/List'
import './App.css'
import Navbar from './Navbar';
import characterDetails from './components/CharacterDetails';


function App() {


  const [message, setMessage] = useState("msg")
  const [names, setnames] = useState(["id", "name", "status"])
  const [Character, setCharacter] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {

  }, [search])




  const handleOnClick = (root) => {
    console.log('clicked')
    setMessage('My new message')
  }
  console.log(setMessage)


  //Render of JSX
  return (

    <div className="root">
      <Navbar />
      <div className="flexcontainer">
        <List>
          {/* {names.map((names) => (
            <div className="Name-preview" key={names.id}>
              <h2> {name.title} </h2>
              <p> {names.status} </p>
            </div>
          ))} */}
        </List >
      </div>
    </div>
  );

}

export default App