import React from 'react'
import Link from 'next/link'
import Hero1 from "./hero1/page.js"

const page = () => {

  const cardDetails = [
    {
      Name: "Aristotal",
      linkURL : "/components/part1",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "lao otso",
      linkURL : "/phillcards",
      image: "/LaoTzo.jpg"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "/vivekananda.jpg"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "Aristotal",
      linkURL : "/components/part1",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "lao otso",
      linkURL : "/phillcards",
      image: "/LaoTzo.jpg"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "/vivekananda.jpg"
    },
    {
      Name: "Aristotal",
      linkURL : "/components/part1",
      image: "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'"
    },
    {
      Name: "lao otso",
      linkURL : "/phillcards",
      image: "/LaoTzo.jpg"
    },
    {
      Name: "Aristotal",
      linkURL : "/phillcards",
      image: "/vivekananda.jpg"
    },
  ]
  return (
    
    <>
    <Hero1 />

    <section className='main-card-section'>
      {cardDetails.map(({Name, linkURL, image}) =>(
         <section className='card-section'>
         <div className=' card-container'>
          <img className='card-image' src={image}/>
         <h2 className='card-text'>{Name}</h2>
         <div>
          <ul className='card-lines'>
              <li><h4> <span>Country-</span> India</h4></li>
              <li><h4> <span>Born-</span> 18/4/1860</h4></li>
              <li><h4> <span>Famous books-</span> India brege, bdbcbckn,wuyu</h4></li>       
          </ul>
          <div className='card-buttons'>
            <h5>  <Link className='card-btn1' href={linkURL}> Learn More</Link> </h5>
            <h5> <Link className='card-btn1' href="/">  Quotes</Link></h5>
          </div>
         </div>
         </div>
         </section>
      ))};
   
   </section>
    </>
  )
}

export default page