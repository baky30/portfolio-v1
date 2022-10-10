import { Experience } from "../helpers/types"

export const fetchExperience = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const experience: Experience[] = await res.json()

    return experience
}