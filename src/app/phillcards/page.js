import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <section className='card-section'>
   <div className=' card-container'>
    <Image className='card-image'  src='/vivekananda.jpg' width= {300} height= {200}  placeholder="blur"
  blurDataURL={'/vivekananda.jpg'} alt='cardimage1'/>
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