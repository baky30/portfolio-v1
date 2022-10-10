import { HomeIcon } from '@heroicons/react/24/solid'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { About } from '../components/About'
import { ContactMe } from '../components/ContactMe'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { WorkExperience } from '../components/WorkExperience'
import { Experience, Project, Skill } from '../helpers/types'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import absoluteUrl from 'next-absolute-url'

type Props = {
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
}

const Home: NextPage<Props> = ({ experience, skills, projects }) => {
  return (
    <div className='bg-navy text-white h-screen snap-y snap-mandatory
      overflow-y-scroll z-0 scrollbar scrollbar-track-blue/40 scrollbar-thumb-orange'>
      <Head>
        <title>Aman&apos;s portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      
      <section id='about' className='snap-center'>
        <About />
      </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience experience={experience} />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />  
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      
      <section id='contact_me' className='snap-center'>
        <ContactMe />
      </section>

        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
            <Link href={'#hero'}>
                <HomeIcon className='w-10 h-10 cursor-pointer text-orange grayscale hover:grayscale-0' />
            </Link>
          </div>
        </footer>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // Fetch data from external API
  const { protocol, host } = absoluteUrl(context.req)
  const apiURL = `${protocol}//${host}`

  const experience: Experience[] = await fetchExperience(apiURL);
  const skills: Skill[] = await fetchSkills(apiURL);
  const projects: Project[] = await fetchProjects(apiURL);

  return { props: { experience, skills, projects } }
}

export default Home
