import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: any = false;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: '',
      password: '',
    });
  }

  submit(){
    const formData = this.loginForm.getRawValue();
    const data = {
      email: formData.email,
      password: formData.password,
    }

    this.authService.login(data).subscribe(
      result => {
        localStorage.setItem('token', result.access_token)
        this.router.navigate(['/user'])
      },
      error => {
        this.error = error;
      }
    );
  }
}
