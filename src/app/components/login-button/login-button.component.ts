import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-button',
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {
  label = input('');

  btnClicked = output();
}
