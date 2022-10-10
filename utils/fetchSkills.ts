import { Skill } from './../helpers/types';
export const fetchSkills = async (apiUrl: string) => {
    const res = await fetch(`${apiUrl}/api/getSkills`)
    const skills: Skill[] = await res.json()

    return skills
}