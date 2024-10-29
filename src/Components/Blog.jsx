import React from 'react';
import './Blog.css'; 

import pic1 from '../Media/services.jpg'
import pic2 from '../Media/pexels-8.jpg'
import pic3 from '../Media/about.jpg'
import mine from '../Media/mine.jpg'


const blogData = [
  {
    id: 1,
    title: "The Future of Technology",
    description: "Exploring the latest trends in technology for 2024.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_3OzNFLiZYX3gSn2ngW6n8vL_wyVvz9S7g&s",
  },
  {
    id: 2,
    title: "Sustainability in Electronics",
    description: "How the electronics industry is becoming more eco-friendly.",
    image: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"
  },
  {
    id: 3,
    title: "Mobile Accessories for 2024",
    description: "The must-have mobile accessories for the coming year.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaSWO2DdN71a0MEQD0ec6xSFFgB5R9DgZsA&s",
  },
  {
    id: 4,
    title: "AI and Machine Learning",
    description: "How AI is transforming the electronics industry.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gxjXDN7Q4HNvZGU8UyJwofcriMmgP9LdSg&s",
  },
  {
    id: 5,
    title: "5G and its Impact",
    description: "What 5G means for consumers and businesses.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GGQZqqiYLRKJmbPpSoacsFXFAhunvulfKQ&s",
  },
  {
    id: 6,
    title: "The Rise of Smart Homes",
    description: "How smart homes are reshaping daily life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mXUDYosivNcgILXsRD7rGotTmnxF5yuqpg&s",
  },
];

export default function Blog() {
  return (

    <div className="bog">
        <h2>Latest News</h2>
    <div className="blog-container">

        
      {blogData.map((blog) => (
        <div key={blog.id} className="card">
          <img src={blog.image} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

