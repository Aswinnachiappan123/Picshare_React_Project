import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out What's inside?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Explore Images Across the Web'
              label='Explore'
              path='/home'
            />
            <CardItem
              src='images/img2.jpg'
              text='Crop Images And make Custom Ratios'
              label='Crop'
              path='/crop'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Remove Background Image'
              label='RemoveBg'
              path='/'
            />
            <CardItem
              src='images/img4.jpg'
              text='Contact Us '
              label='Contact'
              path='/contact'
            />
            <CardItem
              src='images/img5.jpg'
              text='Learn About US'
              label='About us'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;