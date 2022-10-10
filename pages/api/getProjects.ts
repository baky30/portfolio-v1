import { Project } from './../../helpers/types';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Project[]

const MOK_DATA: Project[] = [
    {
        projectName: 'AKN Mobile',
        technologies: ['react', 'redux', 'tailwind', 'typescript',],
        description: 'E-Learning Mobile application on React Native, which gives you easy access to all study content of distance learning course.'
    },
    {
        projectName: 'OBA School',
        technologies: ['react', 'redux', 'sass', 'typescript',],
        description: 'E-Learning Web application on React. It is an online school which provides distance learning specialized in secondary school education.'
    },
    {
        projectName: 'Amped Studio',
        technologies: ['vue', 'typescript', 'sass'],
        description: 'It is a complete online music sequencer and sound editor. Which helps to make the process of making music accessible to even the most inexperienced users.'
    },
    {
        projectName: 'Fashion Mall',
        technologies: ['react', 'graphql', 'javascript', 'sass',],
        description: 'Freelance project, which represents E-Commerce web application for selling clothes and accessories.'
    },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(MOK_DATA)
}