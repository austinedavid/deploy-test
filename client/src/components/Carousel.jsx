import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import photo1 from '../images/acer2.png'
import photo2 from '../images/acer3.jpg'
import photo3 from '../images/apple1.jpg'
import photo4 from '../images/apple5.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9fd99f;
`
const Wrapper = styled.div`
    width: 500px;
    height: 300px;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`
const Ul = styled.ul`
    list-style: none;
    width: 500px;
    height: 300px;
    display: flex;
    transform: translateX(${(prop)=> prop.page * -100}%);
    transition: all 0.6s ease-in-out;
   
`
const Li = styled.li`
   
`
const Img = styled.img`
    width: 500px;
    height: 300px;
    object-fit: contain;
`
const Next = styled.div`
    position: absolute;
    background-color: rgba(256,256,256, 0.3);
    padding: 10px;
    border-radius: 10px;
    color: white;
    z-index: 999;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Back = styled.div`
    
    position: absolute;
    background-color: rgba(256,256,256, 0.3);
    padding: 10px;
    border-radius: 10px;
    color: white;
    z-index: 999;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

// our jsx appears here
const Carousel = () => {
    const [page, setpage] = useState(0)
    
    console.log(page)
    // carousel button function controls
    const handleBack = ()=>{

    }

    const handleNext = ()=>{
        setpage((prev)=> prev +1)
    }
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(page<3){

                setpage(page+1)
            }else{
                setpage(0)
            }
        }, 4000)
        return ()=> clearInterval(interval)
    },[page])
 console.log(page)
  return (
    <Container>
        <Wrapper>
            <Back onClick={handleBack}><ArrowBackIosNewIcon/></Back>
            <Ul page={page}>
                <Li ><Img src={photo1}/></Li>
                <Li><Img src={photo2}/></Li>
                <Li><Img src={photo3}/></Li>
                <Li><Img src={photo4}/></Li>
            </Ul>
            <Next onClick={handleNext}><ArrowForwardIosIcon/></Next>
        </Wrapper>
        
    </Container>
  )
}

export default Carousel