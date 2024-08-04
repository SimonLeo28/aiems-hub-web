import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Simon Leo Alexander', role: 'Student',bio: 'Simon is a student.' },
  { name: 'Yogeshwari R', role: 'Student', bio: 'Yogeshwari is a student.' },
  { name: 'Srujana Deshpande', role: 'Student', bio: 'Srujana is a student' },
  { name: 'Shivarama.R', role: 'Student', bio: 'Shivaram is a student.' },
  { name: 'Tanush Balegar', role: 'Student', bio: 'Tanush is a student.' },
];

const About = () => {
  return (
    <>
    <Navbar/>
    <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>About Us</h1>
      </div>
    <div className="p-8">
      
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Our Mission</h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Our mission is to help students to develop their skills and help gain knowledge by accessing the study materials
          of any required subjects and even increase their academic scores by solving riddles and excercises and short tests 
          created by the respective teachers...
        </p>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Meet the Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-purple-600">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/"} className="bg-black text-white p-3" >Back</Link>
      </div>
    <Footer/>
    </>
  );
};

export default About;