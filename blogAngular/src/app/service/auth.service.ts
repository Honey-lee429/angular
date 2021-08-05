import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//importar o método HttpClientModule no app.module.ts
  constructor(
    private http: HttpClient
  ) {}
  
  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar (user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user)
  }

  logado(){
    //instanciar public auth: AuthService no app.components.ts
    let ok: boolean = false

    if(environment.token != '') { //se o usuário estiver logado, ou seja, devolve um token gerado pelo back-end no meu environment, return true
      ok = true
    }
    return ok


  }
}
