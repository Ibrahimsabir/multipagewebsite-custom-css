"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';
// import Hero from "./components/hero";

export default function NestedContact() {
  return (
    <div className="flex flex-col items-center mt-32">
    {/* <h2 className="title-font sm:text-4xl text-l mb-3 font-small text-blue-600">
    
      </h2> */}
      <h1 className="tracking-widest text-2xl title-font font-medium text-purple-600 mb-1">
        
        <br className="hidden lg:inline-block" />
      
      <Typewriter
           options={{
                       strings: ['This is my Nested Contact Page...'],
                       autoStart: true,
                       loop: true,
                    }}
/>
</h1>  
</div> 
    
  );

}
