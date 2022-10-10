// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Experience } from '../../helpers/types';



type Data = Experience[];

const MOK_DATA: Experience[] = [
    {
        position: 'Frontend Developer',
        companyName: 'Smart App',
        technologies: ['webstorm', 'react', 'redux', 'typescript', 'tailwind'],
        workPeriod: { start: 1628539200000, end: 1662753600000 },
        summary: [
            'Developed scalable reusable components that can beleveraged across UIs',
            'Taking part in usual Agile activities',
            'Daily meetings',
            'Project decomposition',
        ]
    },
    {
        position: 'Frontend Developer',
        companyName: 'Amped Track',
        technologies: ['vscode', 'vue', 'typescript', 'sass'],
        workPeriod: { start: 1617998400000, end: 1628539200000 },
        summary: [
            'Upgrading and adding new functionality',
            'Developed scalable reusable components that can beleveraged across UIs',
            'Taking part in usual Agile activities',
            'Daily meetings',
        ]
    },
    {
        position: 'Frontend Developer',
        companyName: 'Freelance',
        technologies: ['vscode', 'react', 'graphql', 'typescript', 'sass'],
        workPeriod: { start: 1597003200000, end: 1607544000000 },
        summary: [
            'Admin dashboard development',
            'Developed scalable reusable components that can beleveraged across UIs',
            'Taking part in usual Agile activities',
            'Daily meetings',
        ]
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(MOK_DATA)
}
