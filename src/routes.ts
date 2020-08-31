import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(resquest: Request, response: Response) {
  const user = createUser({
    name: 'Louise',
    email: 'luizsouza@gmail.com',
    password: '123456',
    techs: ['ReactJS','NodeJS', {
      title: 'React Native',
      experience: 100,
    }]
  });
  
  return response.json({message: `${user}`});
}