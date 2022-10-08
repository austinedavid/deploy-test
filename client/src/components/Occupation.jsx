import React, {useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Inputs = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
`
const Occupation = ({details, setdetails}) => {
    useEffect(()=>{
        
        
        localStorage.setItem('details', JSON.stringify(details))
    

}, [details])
  return (
    <Container>
        <Inputs placeholder='your work' value={details.yjob} onChange={(e)=> setdetails({...details, yjob: e.target.value})}/>
        <Inputs placeholder='how long can you work' value={details.hlong} onChange={(e)=> setdetails({...details, hlong: e.target.value})}/>
        <Inputs placeholder='apply do you apply' value={details.yapply} onChange={(e)=> setdetails({...details, yapply: e.target.value})}/>
        <Inputs placeholder='why did you leave you job former job' value={details.yleave} onChange={(e)=> setdetails({...details, yleave: e.target.value})}/>
    </Container>
  )
}

export default Occupation