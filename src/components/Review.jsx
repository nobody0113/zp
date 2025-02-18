import React from 'react'

const Review = () => {


    const reviews=[
    {
        id:1,
        name:"Emma s",
        rev:"The platform has completely transformed my delivery process. It's fast, easy to use, and I love the real-time tracking feature. My packages are always on time, and the system is so user-friendly!",
        star:"⭐⭐⭐⭐⭐"
    },
    {
        id:2,
        name:"James L",
        rev:"I’ve used several delivery services in the past, but this one really stands out. The delivery team is always on time, and the ability to track orders in real time makes it so convenient.",
        star:"⭐⭐⭐⭐"     
        
    },
    {
        id:3,
        name:"Sophia R",
        rev:"I was impressed with how smooth and seamless everything worked. The app is intuitive, and I can trust that my deliveries will be handled with care. Highly recommend!",
         star:"⭐⭐⭐⭐"
    },
    {
        id:4,
        name:"David T",
        rev:"The efficiency of the platform is remarkable. No more worrying about delayed deliveries. It’s easy to place orders and follow the progress every step of the way.",
         star:"⭐⭐⭐"
    },
    {
        id:5,
        name:"Olivia W",
        rev:"I’m so glad I found this service! The customer support team is amazing, and the delivery times are accurate. The best part is that I can track my orders, so I know exactly when they’ll arrive.",
         star:"⭐⭐⭐⭐"
    },
    {
        id:6,
        name:"Daniel P",
        rev:"The delivery process was a breeze. I’ve tried several services before, but none of them offered the convenience and reliability that this one does. I’ll definitely use it again.",
         star:"⭐⭐⭐"
    }


    ]

  return (
    <div className='bg-green-50 border-2 h-screen w-screen  '>
        <h1 className='transform transition-all duration-500 hover:translate-x-5 hover:translate-y-10 text-4xl text-orange-400 font-extrabold  italic flex absolute my-10 mx-230  w-80 '> Happy Customers </h1>
    
        <div className='w-440 rounded-2xl flex items-center flex-wrap gap-20 p-10 mx-55 my-50  '>
            {reviews.map((review)=>(
                <div key={review.id} className='border-2 w-120 h-fit text-2xl font-bold text-justify p-6 rounded-2xl transform transition-all duration-500 hover:translate-x-5 hover:translate-y-10 '>
                    <div className='text-orange-400 font-extrabold text-center'>{review.name}</div>
                    <h1 className='text-center'>{review.star}</h1>
                    <div className='f'>{review.rev}</div>
                </div>
            ))}


        </div>
      
        </div>
  
  )
}

export default Review
