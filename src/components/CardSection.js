import React from 'react'
import styled from 'styled-components';
import EachcardItem from './EachcardItem';

const SectionCard=styled.div`
padding: 4rem;
background: #fff;

h1 {
    text-align: center;
  }

`;
const CardContainer=styled.div`
display: flex;
flex-flow: column;
align-items: center;
max-width: 1120px;
width: 90%;
margin: 0 auto;

`;
const CardWrapper=styled.div`
position: relative;
margin: 50px 0 45px;

`;
const ItemCards=styled.ul`
margin-bottom: 24px;

@media only screen and (min-width: 1024px){
    display: flex;

}

`





const CardSection = (
 
) => {
  return (
    
    <SectionCard>
        <h1>Check out these EPIC Destinations!</h1>
        <CardContainer>
            <CardWrapper>
                <ItemCards>
                    <EachcardItem/>
                </ItemCards>


            </CardWrapper>



        </CardContainer>




    </SectionCard>

    
  )
}

export default CardSection