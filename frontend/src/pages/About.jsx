import React from 'react'
import aboutImg from "../assets/about.png"
import { RiDoubleQuotesL } from "react-icons/ri"

const About = () => {

  const statistics = [
    { label: "Clientes satisfechos", value: 99 },
    { label: "Productos exclusivos", value: 12 },
    { label: "Nuevos productos", value: 5 },
  ]

  return (
    <section>
      <div className='max-padd-container'>
        <div className='max-padd-container py-10 bg-white rounded-2xl my-6'>
          {/* container */}
          <div className='flex flex-col xl:flex-row gap-10'>
            {/* left side */}
            <div className='flex-1 relative'>
              <div className='bg-secondary rounded-3xl rounded-tr-[155px] w-[488px]'>
                <img src={aboutImg} alt="" />
              </div>
              <div className='bg-white absolute bottom-0 left-16 max-w-xs p-4 rounded-2xl flexCenter flex-col shadow-sm'>
                <span className='relative bottom-8 p-3 text-white h-12 w-12 flex items-center rounded-full bg-secondary'>
                  <RiDoubleQuotesL className="text-2xl"/>
                </span>
                <p className='text-center relative bottom-3'>
                  Descubre la moda que habla de tu estilo.
                  ¡Mejora tu guardarropa con una colección exclusiva!
                </p>
              </div>
            </div>
            {/* right side */}
            <div className='flex-1 flex justify-center flex-col'>
              <span className='medium-18 text-secondary'>Desvelando nuestro viaje</span>
              <h2 className='h2 max-w-[472px]'>Nuestro compromiso de crear experiencias de moda personalizadas</h2>
              <p className='py-5'>
                Descubra la esencia del estilo, donde cada pieza se elabora con cuidado
                y precisión. Ofrecemos moda que habla de individualidad y calidad.
                Desde las últimas tendencias hasta los clásicos atemporales, nos dedicamos
                a elevar su guardarropa con diseños excepcionales que se adaptan a cada ocasión,
                personalidad y temporada, haciendo de la moda una verdadera expresión de sí mismo.
              </p>
              {/* statics container */}
              <div className='flex flex-wrap gap-4'>
                {statistics.map((statistics, index) => (
                  <div key={index} className='bg-primary text-secondary p-4 rounded-lg'>
                    <div className='flex items-center gap-1'>
                      <h3 className='h3'>{statistics.value}k</h3>
                      <h4 className='bold-22'>+</h4>
                    </div>
                    <p>{statistics.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About