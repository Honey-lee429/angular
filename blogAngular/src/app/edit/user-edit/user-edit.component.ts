import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confSenha: string
  tipoUsuario: string

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmaSenha(event: any){
    this.confSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confSenha) {
      alert('A senhas estão diferentes')
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/home'])
        alert('Usuario atualizado com sucesso!')
        //environment.token = '' atualizar funciona após o usuário logar novamente e para isso zera o token para voltar no login automaticamente
        //environment.nome = ''
       //this.router.navigate(['/login']) 

      })
    }
  }

  findByIdUser(id: number){
    this.auth.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }
}
