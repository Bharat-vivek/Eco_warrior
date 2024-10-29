// src/components/Home.jsx
import React from 'react';

const Home = () => {
    return (
        <div className="home-container pt-16 bg-white text-black">
            <section className="w-screen min-h-screen flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-4">WELCOME TO ECO WARRIOR</h1>
                <p className="text-lg max-w-2xl">
                    Join us in our mission to create a sustainable future through innovative eco-friendly solutions.
                </p>
            </section>

            <section className="w-screen min-h-screen flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-semibold mb-4">Services</h2>
                <p className="text-lg max-w-2xl">
                    We provide a wide range of services to help you reduce your carbon footprint and promote a green lifestyle.
                </p>
            </section>

            <section className="w-screen min-h-screen flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-semibold mb-4">OUR STRENGTHS</h2>
                <p className="text-lg max-w-2xl">
                    Our strengths lie in our commitment to innovation, sustainability, and community engagement.
                </p>
            </section>

            <section className="w-screen min-h-screen flex flex-col justify-center items-center text-center">
                <h2 className="text-3xl font-semibold mb-4">OUR CLIENTS</h2>
                <p className="text-lg max-w-2xl">
                    We are proud to work with clients who share our vision for a greener planet and a sustainable future.
                </p>
            </section>
        </div>
    );
};

export default Home;
