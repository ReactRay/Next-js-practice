import React from 'react'
import Link from 'next/link'

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
        setTimeout(resolve, 2000)
    })
    const response = await fetch(url);
    const data: Tour[] = await response.json()
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
                        <h2>{tour.name}</h2>
                    </Link>
                })}
            </div>
        </section>
    )
}

export default ToursPage
