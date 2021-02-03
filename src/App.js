
import { useState, useEffect } from 'react'
import HelloMsg from './components/HelloMsg'
import List from './components/List'
import './App.css'
import Navbar from './Navbar';


function App() {

  // state
  const [message, setMessage] = useState("")
  const [names, setNames] = useState(["Sarah", "Felix", "Lucas"])

  //useEffect hook to triger function at specific events
  useEffect(() => {
    //action
    console.log('trigered')
  }, [])



  const handleOnClick = (root) => {
    console.log('clicked')
    setMessage('My new message')
  }


  //Render of JSX
  return (

    <div className="root">
      <Navbar />
      <div className="flexcontainer">
        <List>

        </List >
      </div>
    </div>
  );

}

export default App