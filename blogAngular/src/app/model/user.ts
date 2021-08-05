//inserir "strictPropertyInitialization" no tsconfig.json   

import { Tema } from "./tema"

export class User {
    public id: number
    public name: string
    public sobrenome: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public tema: Tema
}