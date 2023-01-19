import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const ItemCard=styled.li`
display: flex;
flex: 1;
margin: 0 1rem;
border-radius: 10px;

@media only screen and (min-width: 1024px){
    margin-bottom: 2rem;

}


`
const CardItemLink=styled(Link)`
display: flex;
flex-flow: column;
width: 100%;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
-webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
border-radius: 10px;
overflow: hidden;
text-decoration: none;

`
const CardItemPicWrap=styled.figure`
position: relative;
width: 100%;
padding-top: 67%;
overflow: hidden;

`
const CardItemImage=styled.img`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: block;
width: 100%;
max-width: 100%;
height: 100%;
max-height: 100%;
object-fit: cover;
transition: all 0.2s linear;

&:hover{
    transform:scale(1.1);
}


`
const CardItemInfo=styled.div`
padding: 20px 30px 30px;

`
const CardItemText=styled.h5`
color: #252e48;
font-size: 18px;
line-height: 24px;

`




function EachcardItem(
    image,
    label,
    text,  
) {
  return (
    <div>
        <ItemCard>
                        <CardItemLink to='/services'>
                            <CardItemPicWrap>
                                {label}
                                {/* Pass the label */}

                                <CardItemImage>
                                <img src={image} alt='none'/>

                                </CardItemImage>



                            </CardItemPicWrap>
                            <CardItemInfo>
                                <CardItemText>
                                    <h5>{text}</h5>

                                </CardItemText>


                            </CardItemInfo>


                        </CardItemLink>


                    </ItemCard>
        
    </div>
  )
}

export default EachcardItem