import React,{useState, useEffect} from 'react'
import Profile from './Profile'
import Occupation from './Occupation'
import Agree from './Agree'
import styled from 'styled-components'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    background-color: #9ed29e;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 400px;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
`
const ProgressCon = styled.div`
    width: 100%;
    height: 1rem;
    background-color: green;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ProgressBar = styled.div`
    width: ${(prop)=> prop.page == 0? "33.3%": prop.page == 1? "66.6%": "100%"};
    background-color: #221313;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: absolute;
    left: 0;
    transition: all 0.5s ease-in-out;
`
const Span = styled.span`
    color: white;
    z-index: 99;
`
const FormStage = styled.h5`
    color: black;
    text-align: center;
    font-size: 20px;
`
const FormWrapper = styled.div`
    transition: all 1s ease-in-out;
`
const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BackDiv = styled.div`
    background-color: #976083;
    color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 10px;
    gap: 5px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover{
        background-color: #90366f; 
    }
`
const NextDiv = styled.div`
     background-color: #538953;
    color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 10px;
    gap: 5px;
    cursor: pointer;
    align-self: ${(prop)=> prop.page == 0 && "flex-end"};
    transition: all 0.5s ease-in-out;

&:hover{
    background-color: green; 
}
`
const Successful = styled.div`
    color: black;
    font-size: 26px;
    font-style: italic;
    font-weight: bold;
`
// below is our jsx
const Form = () => {
    const[page, setpage] = useState(0)
    const formpage = ['profile', 'occupation', 'agreement']
    const[details, setdetails] = useState({
        firstname: "",
        lastname: "",
        middlename: "",
        age: "",
        yjob: "",
        hlong: "",
        yapply: "",
        yleave: "",
        sdiscipline: "",
        nodrinking: "",
        nolate: ""

    })
    const[submitted, setsubmitted] = useState(false)
    useEffect(()=>{
        const ldetails = localStorage.getItem('details')
        if(ldetails){
            const condetails = JSON.parse(ldetails)
            setdetails(condetails)
            
        }
    },[])

    
    
    
    


    // the two functions below we handle the two button functionality
    const handlePrev = ()=>{
        if(page > 0){
            setpage((prev)=> prev -1)
        }
    }

    const handleNext = ()=>{
        if(page < 2){
            setpage((prev)=> prev +1 )
        }
    }
    
    // below we handle the  the function to return the forms
    const formdisplay = ()=>{
        if(page == 0){
            return <Profile details={details} setdetails={setdetails}/>
        }else if(page == 1){
            return <Occupation details={details} setdetails={setdetails}/>
        }else{
            return<Agree details={details} setdetails={setdetails}/>
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(details)
        setsubmitted(true)
    }
  return (
    <Container>
        {
            submitted ? (<Successful>FORM SUBMITTED SUCCESSFULLY</Successful>):
            (
                <Wrapper>
                    <ProgressCon><ProgressBar page={page}></ProgressBar><Span>{page + 1}/3</Span></ProgressCon>
                    <FormStage>{formpage[page].toUpperCase()}</FormStage>
                    <FormWrapper>
                        {formdisplay()}
                    </FormWrapper>
                    <ButtonWrapper>
                        {page > 0 && <BackDiv onClick={handlePrev}><ArrowBackIosNewIcon style={{fontSize: "10px"}} /> <p>PREV</p></BackDiv>}
                        {page < 2? <NextDiv page={page} onClick={handleNext}><p>NEXT</p><ArrowForwardIosIcon style={{fontSize: "10px"}} /></NextDiv>:<NextDiv onClick={handleSubmit}>SUBMIT</NextDiv>}
                        
                    </ButtonWrapper>
                </Wrapper>
            )
        }
      
    </Container>
  )
}

export default Form