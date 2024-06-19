import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/auth/login.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    public loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  authenticate(): void {
    if (this.authForm.valid) {
      this.loadingService.setLoading(true);
      const user = {
        "user": 'Gerardo',
        "mail": this.authForm.get('username')?.value,
        "token": 'abvrt2ikjmw21pq2n.2medw'
      }
      localStorage.setItem('user-session', JSON.stringify(user));
      window.location.reload()
      this.authService.signIn(this.authForm.value).subscribe(data => {
        console.log(data);
      }).add(() => this.loadingService.setLoading(false))
    } else {
      Object.keys(this.authForm.controls).forEach(field => {
        const control = this.authForm.get(field);
        control!.markAsTouched({ onlySelf: true });
      });
    }
  }
}
