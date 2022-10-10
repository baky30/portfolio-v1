import { Experience } from "../helpers/types"

export const fetchExperience = async (apiUrl: string) => {
    const res = await fetch(`${apiUrl}/api/getExperience`)
    const experience: Experience[] = await res.json()

    return experience
}