import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const Section=styled.section`
width:100%;
height:100%;
padding:4rem 0rem;
background:${({lightBg})=>(lightBg?'':'#02424c')};



`;
const Container=styled.div`
padding:3rem calc((100vw-1300px)/2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;

@media screen and (max-width:768px){
  grid-template-columns:1fr;
};

grid-template-areas:${({imgStart})=>(imgStart? `'col2 col1'` :`'col1 col2'`)};
    
@media screen and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart? `'col1 ' 'col2'` :`'col1 col1' 'col2 col2'`)};

};

`
const ColumnLeft=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:1rem 2rem;
grid-area:col1;
// border:${({reverse})=>(reverse?'2':'1')};
color:${({lightText})=>(lightText?'#000':'#fff')};

h1{
  margin-bottom:1rem;
  font-size:clamp(1.5rem, 6vw, 2rem );

}
p{
  margin-bottom:2rem;

}



`
const ColumnRight=styled.section`
padding:1rem 2rem;
// border:${({reverse})=>(reverse?'1':'2')};
display:flex;
justify-content:center;
align-items:center;
grid-area:col2;

// @media screen and (max-width:768px){
//   border:${({reverse})=>(reverse?'2':'1')};
// };

img{
  width:100%;
  height:100%;
  border-radius:10px;
  object-fit:cover;
  @media screen and (max-width:768px){
    width:100%;
    height:100%;
  };



}


`


const Infosection=(
{ 
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  lightText,
  lightBg,
  imgStart
}
  ) =>{
  return (
    <Section lightBg={lightBg}>
        <Container  imgStart={!imgStart} >
            <ColumnLeft lightText={lightText}  >
            <h1>{heading}</h1>
            <p> {paragraphOne}</p>
            <p> {paragraphTwo}</p>
            <Button to="/homes" primary='true'>{buttonLabel}</Button>
            
            </ColumnLeft >
            <ColumnRight  >
            <img src={image} alt='none'/>
            
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Infosection