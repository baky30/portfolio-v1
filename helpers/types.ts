export type Experience = {
    position: string
    companyName: string
    technologies: string[]
    workPeriod: { start: number, end: number }
    summary: string[]
}

export type Project = {
    projectName: string
    technologies: string[]
    description: string
}

export type Skill = {
    name: string
    proficiency: number
}