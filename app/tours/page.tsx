import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
}

const url = 'https://www.course-api.com/react-tours-project'


const fetchTours = async (): Promise<Tour[]> => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
    const response = await fetch(url);
    const data: Tour[] = await response.json()
    console.log(data)
    return data
}

async function ToursPage() {

    const data = await fetchTours()


    return (
        <section>
            <h1 className='text-3xl mb-4 '> Tours</h1>
            <div className='grid md:grid-cols-2 gap-8'>
                {data.map((tour) => {
                    return <Link
                        className='hover:text-blue-500'
                        href={`/tours/${tour.id}`} key={tour.id}>
                        <div className='relative h-48 mb-2'>
                            <Image src={tour.image} alt={tour.name} fill priority
                                sizes='(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw'

                                className='transition duration-1000 object-cover rounded shadow-2xs 
                                hover:shadow-2xl' />
                        </div>
                        <h2>{tour.name}</h2>
                    </Link>
                })}
            </div>
        </section>
    )
}

export default ToursPage
