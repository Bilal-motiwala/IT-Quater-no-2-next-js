'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-500">Bilal Motiwala</h1>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="#about" className="hover:text-blue-500">About</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-500">Projects</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-500">Contact</Link>
              </li>
            </ul>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <button className="text-blue-500 text-3xl">&#9776;</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Im a Frontend Developer</h2>
          <p className="text-lg md:text-xl mb-8">I create responsive and modern websites using Tailwind CSS.</p>
          <Link
            href="#projects"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-200"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">About Me</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hello! I’m <strong>Bilal Motiwala</strong>, a passionate frontend web developer. I love building clean,
            responsive, and user-friendly websites using tools like React, Tailwind CSS, and modern frontend
            technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">My Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/Bmstore1.png"
                alt="BM-Store"
                width={2200}
                height={200}
                className="rounded mb-4 w-full"
              />
              <br />
              <h4 className="text-xl font-bold mb-2 mt-40">BM-Store</h4>
              <p className="text-gray-600 text-[12px]">
                A modern and responsive website built using React and Tailwind CSS.
                <br />
                <br />
              </p>
              <Link
                href="https://bm-store-mu.vercel.app/"
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 ml-"
              >
                Click here
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/resumebuilder.png"
                alt="Resume Builder"
                width={2200}
                height={200}
                className="rounded mb-4 w-full"
              />
              <h4 className="text-xl font-bold mb-2">Resume Builder</h4>
              <p className="text-gray-600">
                A custom portfolio website showcasing my work and skills.
                <br />
                <br />
              </p>
              <Link
                href="https://bilalresumebuilder.vercel.app/"
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 ml-"
              >
                Click here
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src="/Ecommerce2.png"
               alt="E-commerce"
               width={2200}
               height={1000}
               className="rounded mb-4 w-full"
               />
              <h4 className="text-xl font-bold mb-2 mt-11">E-commerce </h4>
              <p className="text-gray-600">
                A fully responsive landing page built with Tailwind CSS.
                <br />
                <br />
              </p>
              <Link
                href="https://bilal-hackathon-2-project.vercel.app/"
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 ml-"
              >
                Click here
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Get In Touch</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            If you dont like to work together or have any questions, feel free to reach out!
          </p>
          <Link
            href="https://bilalmotiwala20@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600"
          >
            Email Me
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Bilal Motiwala. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
