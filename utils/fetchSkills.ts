import { Skill } from './../helpers/types';
export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    const skills: Skill[] = await res.json()

    return skills
}