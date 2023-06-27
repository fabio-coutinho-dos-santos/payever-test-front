import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { SetBackgroundColorService } from '../services/utils/set-background-color.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [LoginService, SetBackgroundColorService]
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly setBackgroundColorService: SetBackgroundColorService
    ) { }

  ngOnInit(): void {
    this.setBackgroundColorService.setBackgroundColor('')
  }

  public loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required]),
  })

  public makeLogin() {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    const confirmPassword = this.loginForm.value.password
    const name = "Fabio";
    this.router.navigate(['/dashboard'])
  //   this.loginService.makeLogin(email, password, confirmPassword, name)
  //   .subscribe({
  //     complete: async () => { 
  //       await localStorage.setItem('LOGGED','true')
  //       this.router.navigate(['/dashboard'])
  //      },
  //     error: (err) => {  
  //       console.log(err) 
  //     },    
  //     next: (resp) => { 
  //       alert(JSON.stringify(resp))
  //      }, 
  // });
  }

}
