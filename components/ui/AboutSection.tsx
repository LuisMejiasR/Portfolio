import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
    return (
        <section className='text-light-1'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/img/avatar_pequeño.png' alt={'avatar pequeño'} width={500} height={500} />
                <div>
                    <h2>Acerca de mi:</h2>
                    <p>
                        Soy un desarrollador fullstack con experiencia en el desarrollo de aplicaciones web. Tengo habilidades tanto en el frontend como en el backend, lo que me permite crear soluciones completas y funcionales. Me apasiona aprender nuevas tecnologías y mantenerme actualizado en las últimas tendencias de desarrollo. Mi objetivo es crear aplicaciones de alta calidad que cumplan con los requisitos del cliente y brinden una excelente experiencia de usuario. Estoy familiarizado con lenguajes de programación como JavaScript, TypeScript, HTML y CSS, así como con frameworks y bibliotecas populares como React, Angular y Node.js. Además, tengo experiencia en el diseño de bases de datos y en el uso de tecnologías de almacenamiento de datos como MySQL y MongoDB. Estoy comprometido con la entrega oportuna de proyectos y me enorgullezco de mi capacidad para trabajar en equipo y comunicarme eficazmente con los miembros del equipo. Siempre estoy dispuesto a asumir nuevos desafíos y estoy emocionado de contribuir a proyectos emocionantes como el tuyo.
                    </p>
                </div>
            </div>
        </section>
    )
}
