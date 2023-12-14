import React from 'react'
import { skills, experiences } from '../constants'

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className=' max-container bg-gray-800 text-gray-100 body-font'>
      <h1 className='head-text'> Hello,  I am <span className='blue-gradient_text font-semibold drop-shadow'> Pooja Thalur</span>
      </h1>

      <div> 
        <p className='mt-5 flex flex-col gap-3 text-slate-500'> A Software Engineer from India, pursuing masters in Information Technology in Arizona State University, United States. 
          I am always curious about learning new technologies. I have worked as a Software Engineer in India specializing in Backend Development also did a lot of Frontend Engineering using ReactJs. 
          Used Techologies and tools related to full stack and few IT management tools like Jira, Notion, etc.
          I have also worked as a Data Science Intern building models and preparing various charts using Python, Tableau, JS.
          Now learning and exploring deeper in those fields and specializing in Data Science as well.
        </p>
      </div>

      <div className='py-10 flex flex-col '>
        <h3 className='subhead'>My Skills</h3>
          <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill, index) => (
                <div className='block-container w-20 h-20'>
                  <div className='btn-black rounded-xl'>
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={skill.imageUrl} alt={skill.name} className='w-16 h-16 object-contain'/>
                  </div>
                  </div>
                </div>
              ))  
              }
          </div>

      </div>

      <div className='py-16 '>
              <h3 className='subhead-text'> Work Experience</h3>
              <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                  I've worked with UrbanPro.com as a Software Engineer, gained in-depth experience in scaling systems, backend development, performance optimization of the applications. Developed lot of revenue generating features for the company.
                  Teamed up with smart minds there and leveled up my knowledge.
                </p>
              </div>

              <div className=' mt-12 flex '>
                {/* using react vertical timeline component */}
                <VerticalTimeline>
                  {experiences.map((experience) => (
                    <VerticalTimelineElement key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img src={experience.imageUrl} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
                    </div>}
                    iconStyle={{background: experience.iconBg}}
                    contentStyle={{
                      borderStyle: 'solid',
                      borderBottom: '8px',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',
                    }}
                    >
                      <div>
                        <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                        <p className='text-black-500 font-medium font-base' style={{margin:0}}>{experience.company_name}</p>
                        <ul className='my-5 list-disc ml-5 space-y-2'>
                          {experience.points.map((desc, index) => (
                            <li key='experience-point-4{index}' className='text-black-500/50 font-normal pl-1 text-small'>{desc}</li>
                          ))}
                        </ul>
                        <p className='text-black-500 font-medium font-base' style={{margin:0}}>{experience.date}</p>
                        <p className='text-black-500 font-medium font-base'>{experience.description}</p>
                      </div>
                    </VerticalTimelineElement>  
                  ))}
                </VerticalTimeline>
              </div>
      </div>

      <div className='border-slate-200 '>
          <CTA/>
      </div>
    </section>
  )
}

export default About