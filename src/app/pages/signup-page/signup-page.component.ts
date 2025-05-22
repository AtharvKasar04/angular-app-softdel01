import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  userService = inject(UserService);
  fb = inject(FormBuilder);

  signupForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, this.usernameValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSignup(): void {

    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.userService.addUser(user);

      alert('Signup successful!');

      console.log(user);
      this.signupForm.reset();

    } else {
      this.signupForm.markAllAsTouched();
      alert('Please fix the errors in the form.');
    }
  }

  usernameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (!value) return null;

    if (!value.startsWith('@')) {
      return { mustStartWithAt: true };
    }

    const withoutAt = value.slice(1);
    if (/[^a-zA-Z0-9]/.test(withoutAt)) {
      return { invalidCharacters: true };
    }

    return null;
  }

  get username() { return this.signupForm.get('username'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

  // Function for showing/hiding password
  //TODO: Minimize by conditional rendering
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
