import { Skill } from './../helpers/types';
export const fetchSkills = async () => {
    const res = await fetch(`http://localhost:3000/api/getSkills`)
    const skills: Skill[] = await res.json()

    return skills
}