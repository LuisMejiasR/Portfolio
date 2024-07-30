'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export const HeaderHome = () => {
    return (
        <section className='text-white w-full self-start'>
            <div className='grid glird-cols-1 lg:grid-cols-12'>
                <div className='lg:col-span-7 place-self-center'>
                    <h1 className=' text-light-1 mb-4 text-4xl lg:text-6xl font-extrabold'>
                        Hola! Soy {' '} <br />
                        <TypeAnimation
                            sequence={[
                                'Luis Mejías',
                                1000,
                                'Desarrollador',
                                1000,
                                'Diseñador',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='body-medium text-light-2 text-lg lg:text-xl mb-6'>
                        Soy un Fullstack con 2 años de experiencia.
                        Me oriento mucho a los detalles y soy bueno trabajando en equipo.
                        Aprecio mucho una buena comunicación con mis compañeros y un ambiente de desarrollo Agil
                    </p>
                    <div>
                        <button className='contact_btn max-md:w-full font-medium mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
                            Contratame
                        </button>
                        <button className='contact_btn max-md:w-full font-medium bg-transparent hover:bg-slate-800 text-white border boder-white mt-4'>
                            Descarga mi CV
                        </button>
                    </div>
                </div>
                <div className='lg:col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-dark-3 object-cover w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            className='absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            alt='gif'
                            src={'/img/coming_in_hot.gif'}
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
