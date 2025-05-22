import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  // email = '';
  // password = '';

  userService = inject(UserService);
  fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  onLogin(): void {

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const isValid = this.userService.validateUser(email, password);

      if (isValid) {
        alert(`User with email: ${email} has logged in!`);
        this.loginForm.reset();
      } else {
        alert(`Invalid credentials. Please try again!`);
        this.loginForm.reset();
      }
    } else {
      this.loginForm.markAllAsTouched();
      alert(`Please fix all the errors in the form.`)
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  passwordHidden = signal(true);

  showHidePassword() {
    if (this.passwordHidden() === true) {
      console.log('value changed to false');
      this.passwordHidden.set(false);
    } else {
      console.log('value changed to true');
      this.passwordHidden.set(true);
    }
  }

}
