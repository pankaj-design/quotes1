import React from 'react'
import Link from 'next/link';
import Featured from "../featured/page.js"
import About from "../about/page.js"
import Phillcards from "../phillcards/page.js"


const page = () => {
  return (
    <>
    <Featured/>

    <section className='section-hero'>
        <div className='hero'>
        <div className='hero-text-box'>
            <h1 className='heading-primary'>Phylosophy is Here</h1>
            <p className='hero-description'> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for English versions  Rackham The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for English versions from the 1914 translation by H. Rackham The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for English versions  Rackham The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for English versions from the 1914 translation by H. Rackham The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for English versions from the 1914 translation by H. Rackham.</p>
            <p className='hero-buttons'>
        <Link className='btn' href="/">Start</Link>
        <Link className='btn' href="/">learn more</Link>

      </p>
      
        </div>
        <div className='hero-image-box'>
    <Phillcards />

        {/* <img className='hero-img' src='https://images.unsplash.com/photo-1593240637899-5fc06c754c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=394&q=80'  alt='image'/> */}
        </div>
        </div>
    </section>

    </>
  )
}

export default page