"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import styles from "../about.module.css"
// import Hero from "./components/hero";

export default function NestedAbout() {
  return (
    <div className="flex flex-col items-center mt-32">
    <h2 className={styles.gradient} >
    Welcome To The Nested About Page...
      </h2>
      <h1 className="tracking-widest text-2xl title-font font-medium text-blue-600 mb-1">
        
        <br className="hidden lg:inline-block" />
      
      <Typewriter
           options={{
                       strings: ['This is my Nested About Page...'],
                       autoStart: true,
                       loop: true,
                    }}
/>
</h1>  
</div> 
    
  );

}
