import { Project } from "../helpers/types"

export const fetchProjects = async (apiUrl: string) => {
    const res = await fetch(`${apiUrl}/api/getProjects`)
    const experience: Project[] = await res.json()

    return experience
}