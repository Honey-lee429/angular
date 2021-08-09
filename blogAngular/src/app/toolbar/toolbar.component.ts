import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  nome = environment.nome //para deixar dinâmico toda vez que o usuário logar
  id = environment.id
  

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
  }

}
