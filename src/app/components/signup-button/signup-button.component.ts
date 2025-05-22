import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-signup-button',
  imports: [],
  templateUrl: './signup-button.component.html',
  styleUrl: './signup-button.component.css'
})
export class SignupButtonComponent {
  label = input('');

  btnClicked = output();
}
