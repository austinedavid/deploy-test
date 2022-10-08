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

const Profile = ({details, setdetails}) => {
    useEffect(()=>{
        
        
        localStorage.setItem('details', JSON.stringify(details))
    

}, [details])
  return (
    <Container>
        <Inputs placeholder='first name' value={details.firstname} onChange={(e)=> setdetails({...details, firstname: e.target.value})}/>
        <Inputs placeholder='middle name' value={details.middlename} onChange={(e)=> setdetails({...details, middlename: e.target.value})}/>
        <Inputs placeholder='last name' value={details.lastname} onChange={(e)=> setdetails({...details, lastname: e.target.value})}/>
        <Inputs placeholder='age' value={details.age} onChange={(e)=> setdetails({...details, age: e.target.value})}/>
    </Container>
  )
}

export default Profile