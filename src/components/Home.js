import React from "react"
import BackgroundImage from "../images/ImageLaserEngraving.jpg"

export default function Home() {
    return (
        <main>
            <img 
            src={BackgroundImage}
            alt="Laser Ingraving"
            className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen p-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Quality Engineer Solutions</h1>
            </section>
        </main>
    )
    
}