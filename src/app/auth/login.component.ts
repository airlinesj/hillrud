import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({ username: [''], password: [''] });
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit() {
    const { username, password } = this.form.value as any;
    if (this.auth.login(username, password)) {
      this.router.navigate(['/private']);
    } else {
      this.error = 'Invalid credentials — try parents / love22';
    }
  }
}
