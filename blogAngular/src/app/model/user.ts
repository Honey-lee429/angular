//inserir "strictPropertyInitialization" no tsconfig.json   

import { Postagem } from "./postagem"
import { Tema } from "./tema"

export class User {
    public id: number
    public name: string
    public sobrenome: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public tema: Tema[]
    public texto: string
    public postagem: Postagem[]
}