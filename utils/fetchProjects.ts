import { Project } from "../helpers/types"

export const fetchProjects = async () => {
    const res = await fetch(`http://localhost:3000/api/getProjects`)
    const experience: Project[] = await res.json()

    return experience
}