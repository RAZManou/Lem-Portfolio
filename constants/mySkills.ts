export interface ISkill {
  name: string;
  level: number;
}
export interface IGlobalSkill {
  name: string;
  level: number;
  skills: ISkill[];
}

const mySkills: IGlobalSkill[] = [
  {
    name: 'Frontend',
    level: 85,
    skills: [
      { name: 'ReactJS', level: 90 },
      { name: 'React Native', level: 75 },
      { name: 'NextJS', level: 70 },
      { name: 'Apollo / GraphQL Client', level: 95 },
      { name: 'Material-UI', level: 90 },
    ],
  },
  {
    name: 'Backend',
    level: 90,
    skills: [
      { name: 'NodeJS', level: 90 },
      { name: 'Apollo / GraphQL Server', level: 90 },
      { name: 'Prisma 1 / Prisma 2', level: 90 },
    ],
  },
  {
    name: 'Autres',
    level: 90,
    skills: [
      { name: 'Typescript', level: 100 },
      { name: 'Git', level: 80 },
    ],
  },
];

export default mySkills;
