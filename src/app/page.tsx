import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container block items-center justify-between font-mono text-sm lg:flex">
        <Image className='rounded-md' src="/dummy.gif"
      width={5000}
      height={5000}
      alt="Picture of the author"></Image>
      </section>

      <section className='container h-screen block'>
         <span className='text-8xl'>WE KNOW WHAT <br></br> WORK AND DON'T.</span>
      </section>
      <section className='block container h-screen'> 
        <hr />
        <h1 className='text-8xl'>ARROW </h1>
        <div className='grid grid-cols-4 grid-flow-col gap-4'>
          <div className='container col-span-2'>
            <h2 className="max-w-fit"> Story </h2>
            <p className='block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='container border-x-4 '>
            <h2> Our services </h2>
            <ul>
              <li>STRATEGY</li>

              <li> VISUAL IDENTITY</li>

              <li>WEB DESIGN</li>

              <li>DEVELOPMENT</li>

              <li>ART DIRECTION</li>

              <li>CAMPAIGN</li>

              <li>& MORE</li>
            </ul>
          </div>
          <div className='container bg-gray-100 border-x-2 rounded-lg'>
            <span className='bg-black text-white '> Stats </span>

          </div>
        </div>
      </section>
      <marquee className="mt-4 py-4 inline-block w-screen bg-amber-600 text-black"> 
        <span class="inline-block mx-2 font-bold">
            <svg class="inline-block mx-2 w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg> 
            <span className="text-2xl">
              Company 01
            </span> 
          </span>
          <span class="inline-block mx-2 font-bold">
            <svg class="inline-block mx-2 w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg> 
            <span className="text-2xl">
              Company 01
            </span> 
          </span>
          <span class="inline-block mx-2 font-bold">
            <svg class="inline-block mx-2 w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
            </svg> 
            <span className="text-2xl">
              Company 01
            </span> 
          </span>
       
      </marquee>
      <section className='container block'>
        <h1 className='text-8xl'> Projects</h1>
        <div className="grid grid-cols-2 grid-flow-col gap-8">
          <ul className=''>
            <li className='p-4 border-t-2 text-amber-600'> Work 01 </li>
            <li className='p-4 border-t-2'> Work 01 </li>
            <li className='p-4 border-t-2'> Work 01 </li>
            <li className='p-4 border-t-2'> Work 01 </li>
          </ul>
          <span>project detail
          <Image className='rounded-md' src="/dummy.gif"  width={500}
      height={500} ></Image>
          </span>
        </div>
        
      </section>
    </main>
  )
}
