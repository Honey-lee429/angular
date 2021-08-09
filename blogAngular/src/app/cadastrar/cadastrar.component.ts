import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confSenha: string
  tipoUsuario: string
  idUser: number

  constructor( //tudo que coloca dentro do contrutor é injeção de dependência 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { //A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
    window.scroll(0, 0)  
  }

  confirmaSenha(event: any) {
    this.confSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confSenha) {
      console.log(this.tipoUsuario)
      console.log(this.user.senha)
      console.log(this.confSenha)
      console.log(this.user.email)
      console.log(this.user.name)
      alert('A senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
   
  }

}
