import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin  = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    console.log(JSON.stringify(this.userLogin))
    
     this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp
      this.router.navigate(['/home'])

      //variáveis globais
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id

      console.log(environment.nome)
      console.log(environment.id)
      console.log(environment.token)
     
     }, erro => {
       if(erro.status == 500) {
         alert("usuário ou senha está incorreta")
       }
     }) 
  }

}
