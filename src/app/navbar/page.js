"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IonIcon } from '@ionic/react';
import { menu, close} from 'ionicons/icons';


const page = () => {
  // const btnNav = document.querySelector(".btn-mobile-nav");
  // const headClass = document.querySelector(".header");

useEffect(() => {

  const btnNav = document.querySelector(".btn-mobile-nav");
  const headClass = document.querySelector(".header");
  if (btnNav) {
    btnNav.addEventListener("click", function(){
      headClass.classList.toggle("nav-open")
    })
  }
 
})
const router = useRouter();


const removenav = () =>{
  headClass.classList.toggle("nav-open")

}

  return (
    <>
    <header className='header sticky '>
      <img className='logo' src='https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='logo image'/>

      <nav className='main-nav '>
        <ul className='main-nav-list'>
          <li> <Link className='main-nav-link' onClick={removenav} href="/featured">Featured</Link></li>
          <li> <Link className='main-nav-link' onClick={removenav} href="/hero1">home2</Link></li>
          <li> <Link className='main-nav-link' onClick={removenav} href="/documents">home3</Link></li>
          <li> <Link className='main-nav-link' onClick={removenav} href="/phillcards">home4</Link></li>
        </ul>
      </nav>


     <button className='btn-mobile-nav'>
      <IonIcon  className='icon-mobile-nav menu-outline' icon={menu}/> 
      <IonIcon className='icon-mobile-nav close-outline' icon={close} />
      </button> 


   
    </header>
    </>
  )
}

export default page