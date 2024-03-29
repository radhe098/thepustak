import React from 'react'
import bokimg from '/public/the secret.jpeg'
const Slideshow = () => {
  return (
    <>
    {/* style={{ backgroundColor: "#ffffff"}} */}


      <div style={{ backgroundColor: "#C6F6D5"}} className='h-[24rem] min-w-[32rem]  border-black border m-4 rounded-3xl overflow-hidden '>
        <div className='border-b-black border-1 h-[22rem] w-[auto] flex justify-around'>
        <div class="h-auto flex items-center justify-center">
    <p class="text-center text-6xl">&lt;</p>
        </div>
        <div className='relative flex justify-between gap-2'>
        <div className='relative flex flex-col lg:flex-row justify-between gap-2'>
    <img src="public/the secret.jpeg" className='object-cover rounded-3xl mt-3 lg:mt-0 lg:h-[22rem] min-w-[28rem] w-full lg:w-auto font-poppins' alt="" />
    <div className='absolute inset-0 overflow-auto bg-opacity-50 top-72 right-0 w-auto h-[20%] mx-6 flex items-center justify-center '>
        <div className='lg:max-w-[64rem] p-4 text-white'>
            The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thought alone can influence objective circumstances within ones life . The book alleges energy as assurance of its effectiveness. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quasi consequuntur nesciunt aperiam, necessitatibus voluptatem, molestias inventore natus voluptates eos tempora? Non ab veritatis unde a eum deleniti, doloremque asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore voluptate minima sunt placeat, reprehenderit voluptates. Minus deserunt dolore, placeat doloribus consequuntur officiis quae quibusdam reiciendis eligendi quam, adipisci nisi!
        </div>
    </div>
</div>
</div>
        <div class="h-auto flex items-center justify-center">
    <p class="text-center text-6xl">&gt;</p>
        </div>
                </div>
      </div>  
    </>
  )
}

export default Slideshow
