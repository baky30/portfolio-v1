import React from 'react'
import { Skill } from '../helpers/types'
import { SkillItem } from './Skill'

type Props = {
  skills: Skill[]
}

export const Skills = ({ skills }: Props) => {
  return (
    <div className='h-screen relative flex flex-col items-center justify-evenly overflow-hidden'>
        <h1 className='sectionTitle'>Skills</h1>

        <h3 className='absolute top-28 uppercase tracking-[3px] text-cream text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5 pt-20'>
          {skills.map((s, i) => <SkillItem key={s.name} skill={s} directionLeft={i < skills.length / 2} />)}
        </div>
    </div>
  )
}
