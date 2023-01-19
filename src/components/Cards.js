import React from 'react';
import './Card.css';
import CardItem from './Carditem';
import Image_One from './ImagesThumb/img-1.jpg'
import Image_Two from './ImagesThumb/img-2.jpg'
import Image_Three from './ImagesThumb/img-3.jpg'
import Image_Four from './ImagesThumb/img-4.jpg'
import Image_Five from './ImagesThumb/img-5.jpg'
import Image_Six from './ImagesThumb/img-6.jpg'
import Image_Seven from './ImagesThumb/img-7.jpg'




function Cards(
  
) {
  return (

       <div className='cards' >
      <h1>Check out these EXOTIC Homes!</h1>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src={Image_One}
              text='Explore Luxury homes in Carlifornia'
              label='Carlifornia'
              DarkBg='false'
             
            />
            <CardItem
              src={Image_Two}
              text='Explore Luxury homes in Florida'
              label='Florida'
              path='/services'
              DarkBg='false'
            />
             <CardItem
              src={Image_Three}
              text='Explore Luxury homes in Los Angeles'
              label='Los Angeles'
              path='/sign-up'
              DarkBg='false'
              
            />
          </ul>
          <ul>
          <CardItem
              src={Image_Four}
              text='Explore Luxury homes in Los Angeles'
              label='Los Angeles'
              path='/sign-up'
              DarkBg='true'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image_Five}
              text='Explore Luxury homes in New York'
              label='New York'
              path='/services'
              DarkBg='false'
            />
            <CardItem
              src={Image_Six}
              text='Explore Luxury homes in Miami'
              label='Miami'
              path='/products'
              DarkBg='false'
            />
            <CardItem
              src={Image_Seven}
              text='Explore Luxury homes in Los Angeles'
              label='Los Angeles'
              path='/sign-up'
              DarkBg='false'
            />
          </ul>
        </div>
      </div>
    </div>

   
  );
}

export default Cards;