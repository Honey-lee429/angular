import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogAngular';

  constructor(
    public auth: AuthService // deixar public para acessar no html e private no ts
  ){}
}
