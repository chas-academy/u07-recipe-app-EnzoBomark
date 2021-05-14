import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: any = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      password_confirmed: '',
    });
  }

  submit(){
    const formData = this.registerForm.getRawValue();
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmed,
    }

    this.authService.register(data).subscribe(
      result => {
        localStorage.setItem('token', result.access_token)
        this.router.navigate(['/user'])
        this.error = false;
      },
      error => {
        this.error = error;
      }
    );
  }
}
