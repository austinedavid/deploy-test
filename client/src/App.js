import axios from 'axios'
import './App.css';
import react, {useEffect, useState} from 'react'
function App() {
  const[datas, setdatas] = useState()
  const[element, setelement] = useState()
  useEffect(()=>{
    const backend = async()=>{
      await axios.get('https://flowkitez.herokuapp.com/').then((res)=> setdatas(res.data))
      
    }
    backend()
  }, [])
  useEffect(()=>{
    const runner = async()=>{
      await axios.get('https://flowkitez.herokuapp.com/api').then((res)=>setelement(res.data))
    }
    runner()
  })
  return (
    <div className="App">
      <p>hello world we are testing heroku</p>
      <h5>{datas}</h5>
      <p>god is good</p>
      <h4>lets check if it will rebuild automatically</h4>
      <h3>{element}</h3>
    </div>
  );
}

export default App;
