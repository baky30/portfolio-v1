import { Experience } from "../helpers/types"

export const fetchExperience = async () => {
    const res = await fetch(`http://localhost:3000/api/getExperience`)
    const experience: Experience[] = await res.json()

    return experience
}