import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/tema';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]

  tema: Tema = new Tema()
  litaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == '') {
      alert ('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/login'])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.litaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  } 

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=> {
      this.listaPostagem = resp
    })
  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }
  
  publicar(){
    this.tema.id_tema = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
