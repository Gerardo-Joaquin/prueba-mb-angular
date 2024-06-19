import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/auth/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;
  constructor(
    private authService: LoginService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      nombre_comercial: [''],
      calle: [''],
      numero_exterior: [''],
      numero_interior: [''],
      colonia: [''],
      cp: [''],
      telefono_comercial: [''],
      csf: [''],
      identificacion_oficial: [''],
    });
  }
  createUser(): void {
    console.log(this.createForm.value);
    this.authService.create(this.createForm.value).subscribe(data => {
      console.log(data);
    })
  }
}
