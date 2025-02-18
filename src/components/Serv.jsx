import React from 'react'
import printer from '/public/zerox_g.png'; 


const Serv = () => {

    const services=[{
        id:1,
        title:"Document Management Services",
        description:"Zerox Point offers secure cloud-based storage and AI-driven document sorting for easy management. Collaborate seamlessly with team members and vendors through advanced sharing and version control tools."
    },
    {
        id:2,
        title:"Pricing Optimization Tools",
        description:"Our dynamic pricing engine adjusts prices in real time, helping you stay competitive. Use price modeling and forecasting tools to make data-driven pricing decisions and optimize revenue."
    },
    {
        id:3,
        title:"Customer & Vendor Management",
        description:"Manage vendor documents and pricing easily through an intuitive portal. Streamline customer service requests and improve collaboration with real-time communication tools."
    },
    {
        id:4,
        title:"Security & Compliance",
        description:"Top-tier encryption and audit trails ensure your data is secure and compliant. Set user permissions to control access and protect sensitive information."
    },
    {
        id:5,
        title:"Data Analytics & Reporting",
        description:"Access real-time analytics with custom dashboards to monitor key metrics. Detailed reports provide insights to optimize workflows and improve operational efficiency."
    },
    {
        id:6,
        title:"Integration Services",
        description:"Easily integrate with your existing ERP and CRM systems for seamless operations. Our flexible API enables custom integrations with third-party platforms."
    },
    {
        id:7,
        title:"Training & Support",
        description:"Get comprehensive onboarding and 24/7 support to ensure a smooth experience. Access our knowledge base and personalized training to maximize platform use."
    }
    ]



  return (
    <div className=' border-2 w-screen h-screen bg-green-50'>
        <h1 className='flex absolute mx-20 font-extrabold text-green-600 text-4xl p-6 '>Ser</h1>
        <img  className='flex absolute my-35 mx-20 w-180 ' src={printer} alt="" />
        <div className='  container w-230 h-130 p-8  flex absolute right-3'>
            <div  className='  flex flex-wrap gap-15'>
                {services.map((service)=>(
                    <div key={service.id} className='border-2 w-60 h-fit text-center rounded-2xl p-3 bg-white-20 backdrop-blur-2xl'>
                        <div className='text-orange-400 font-extrabold'>{service.title}</div>
                    
                    <div className='font-bold '>{service.description}  </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Serv
