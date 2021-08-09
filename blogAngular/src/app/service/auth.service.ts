import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  login(userLogin: UserLogin): Observable<UserLogin>{ // Observable serve para garantir que o tipo da variável será passado corretamente.
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

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuario/${id}`, this.token)
  }
}
