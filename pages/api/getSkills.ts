import { Skill } from './../../helpers/types';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Skill[]

const MOK_DATA: Skill[] = [
  { name: 'webstorm', proficiency: 100 },
  { name: 'vscode', proficiency: 100 },
  { name: 'javascript', proficiency: 80 },
  { name: 'typescript', proficiency: 70 },
  { name: 'react', proficiency: 80 },
  { name: 'redux', proficiency: 80 },
  { name: 'vue', proficiency: 60 },
  { name: 'graphql', proficiency: 60 },
  { name: 'tailwind', proficiency: 80 },
  { name: 'sass', proficiency: 90 },
  { name: 'nodejs', proficiency: 40 },
  { name: 'html', proficiency: 90 },
  { name: 'css', proficiency: 90 },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(MOK_DATA)
}
