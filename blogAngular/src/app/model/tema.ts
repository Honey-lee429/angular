import { Postagem } from "./postagem"
import { User } from "./user"

export class Tema {
    public id_tema: number
    public descricao: string
    public usuario: User[]
    public postagem: Postagem[]
}