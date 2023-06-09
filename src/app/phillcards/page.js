import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <section className='card-section'>
   <div className=' card-container'>
    <img className='card-image'  src='https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' alt='cardimage1'/>
   <h2 className='card-text'>Vivekanand</h2>
   <div>
    <ul className='card-lines'>
        <li><h4> <span>Country-</span> India</h4></li>
        <li><h4> <span>Born-</span> 18/4/1860</h4></li>
        <li><h4> <span>Famous books-</span> India bqiwni</h4></li>       
    </ul>
    <div className='card-buttons'>
      <h5>  <Link className='card-btn1' href="/"> Learn More</Link> </h5>
      <h5> <Link className='card-btn1' href="/">  Quotes</Link></h5>
    </div>
   </div>
   </div>
   </section>
    
    </>
  )
}

export default page