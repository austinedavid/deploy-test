import axios from 'axios'
import './App.css';
import react, {useEffect, useState} from 'react'
function App() {
  const[datas, setdatas] = useState()
  useEffect(()=>{
    const backend = async()=>{
      const response = await axios.get('http://localhost:5000/').then((res)=> setdatas(res.data))
      console.log(datas)
    }
    backend()
  }, [])
  return (
    <div className="App">
      <p>hello world we are testing heroku</p>
      <h5>{datas}</h5>
    </div>
  );
}

export default App;
