import React from 'react';
import Card from './Card';
import "./Photo.css"

const cardData = [
  {
    imageUrl: 'https://media.istockphoto.com/id/1393600377/photo/evening-view-and-sunset-view-of-shibuya-scramble-square-shibuya-sky.webp?b=1&s=612x612&w=0&k=20&c=RKwomGeEYeEsFnT4K7a_Rihm8ip0Ryj3Ys7cF2Sx8VY=',
    description: 'Sunset',
    url: 'https://media.istockphoto.com/id/1393600377/photo/evening-view-and-sunset-view-of-shibuya-scramble-square-shibuya-sky.webp?b=1&s=612x612&w=0&k=20&c=RKwomGeEYeEsFnT4K7a_Rihm8ip0Ryj3Ys7cF2Sx8VY=',
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_640.jpg',
    description: 'Mountain',
    url: '',
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_1280.jpg',
    description: 'Abstarct',
    url: '',
  },
  {
    imageUrl: 'https://media.istockphoto.com/id/639775532/photo/taj-mahal-in-agra-india-on-sunset.webp?b=1&s=612x612&w=0&k=20&c=bRFDrkEFwAS0p7MY8S6cseyIFa7xD39_aFvjZZM1fVE=',
    description: 'TajMahal',
    url: '',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU',
    description: 'Rose',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU',
  },
  {
    imageUrl: 'https://media.istockphoto.com/id/1393600377/photo/evening-view-and-sunset-view-of-shibuya-scramble-square-shibuya-sky.webp?b=1&s=612x612&w=0&k=20&c=RKwomGeEYeEsFnT4K7a_Rihm8ip0Ryj3Ys7cF2Sx8VY=',
    description: 'Sunset',
    url: '',
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_640.jpg',
    description: 'Mountain',
    url: '',
  },
  {
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_1280.jpg',
    description: 'Abstarct',
    url: '',
  },
  {
    imageUrl: 'https://media.istockphoto.com/id/639775532/photo/taj-mahal-in-agra-india-on-sunset.webp?b=1&s=612x612&w=0&k=20&c=bRFDrkEFwAS0p7MY8S6cseyIFa7xD39_aFvjZZM1fVE=',
    description: 'TajMahal',
    url: '',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU',
    description: 'Rose',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU',
  },
];

function Photo() {
  return (
    <div className="Photo">
      {cardData.map((data, index) => (
        <Card
          key={index}
          imageUrl={data.imageUrl}
          description={data.description}
          url={data.url}
        />
      ))}

    </div>
  );
}

export default Photo;

