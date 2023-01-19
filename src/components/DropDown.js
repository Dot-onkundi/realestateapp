import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const DropDownContainer=styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#02424c;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({isopen})=>(isopen? '1':'0')};
top:${({isopen})=>(isopen? '0':'-100%')};
`;
const Icon=styled.div`
position:absolute; 
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;

` ;
const CloseIcon=styled(FaTimes)`
color:#000d1a;


`;
const DropdownWrapper=styled.div``
const DropdownMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4, 80px);
text-align:center; 
margin-bottom:4rem;


@media screen and (max-width:468px){
    grid-template-rows:repeat(4, 80px);
}  

`;
const DropdownLink=styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color:#fff;
font-size:1.5rem;
text-decoration:none; 
list-style:none;
color:#fff;
cursor:pointer;
transition:0.2s ease-in-out;


&:hover{
    color:#000d1a;
    }






`
const BtnWrap=styled.div`
display:flex;
justify-content:center;
`

const DropDown=({
    isopen,
    toggle
})=> (
    <DropDownContainer isopen={isopen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map = ((item, index) => (
                    <DropdownLink to={item.link} key={index}>
                        {item.title} 
                    </DropdownLink>
                ))}
                 
            </DropdownMenu>
            <BtnWrap>
                <Button primary='true' round='true' big='true' to='/content'>
                    Contact us
                </Button>
            </BtnWrap>

        </DropdownWrapper>


    </DropDownContainer>
)

export default DropDown