import React from 'react'
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

const Agree = ({details, setdetails}) => {
  return (
    <Container>
        <Inputs placeholder='do you agree on self discipline' value={details.sdiscipline} onChange={(e)=> setdetails({...details, sdiscipline: e.target.value})}/>
        <Inputs placeholder='do you agree on no drinking' value={details.nodrinking} onChange={(e)=> setdetails({...details, nodrinking: e.target.value})}/>
        <Inputs placeholder='do you agree on no late coming' value={details.nolate} onChange={(e)=> setdetails({...details, nolate: e.target.value})}/>
    </Container>
  )
}

export default Agree