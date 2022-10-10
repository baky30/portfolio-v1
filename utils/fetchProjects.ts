import { Project } from "../helpers/types"

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const experience: Project[] = await res.json()

    return experience
}