"use client"
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-32">
    <h2 className="title-font sm:text-4xl text-l mb-3 font-small text-red-600">
    Assalam O Alaikum 
      </h2>
      
      <h1 className="tracking-widest text-2xl title-font font-medium text-blue-600 mb-1">
        
        <br className="hidden lg:inline-block" />
      
      <Typewriter
           options={{
                       strings: ['This is my welcome Page...'],
                       autoStart: true,
                       loop: true,
                    }}
/>
</h1>  
      
 {/* <Card heading="Next.js" description="Passionate Next.js developer focused on creating fast, scalable web applications with seamless user experiences."/>
<br />
 < AboutSection /> 
 <Cart/> */}
</div>     
  );
}
