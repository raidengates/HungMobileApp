import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
//import {ApiService} from '../_services/api.service';
import {AuthService} from '../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  title = 'Đăng nhập';

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  
  constructor(
    public titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService : AuthService,
    //private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    // set title page
    this.titleService.setTitle(this.title);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // for accessing to form fields
  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.fval.username.value, this.fval.password.value)
    .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log("Error:" + error.message); //this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        });
      }
      
  // isUserLogin(){
  //   console.log(this._auth.getUserDetails())
  //   if(this._auth.getUserDetails() != null){
  //       this.isLoggedIn = true;
  //   }
  // }

  // onSubmit(form: NgForm) {
  //   console.log('Your form data : ', form.value);
  //   this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
  //     if (res.status) {        
  //       console.log(res)
  //       this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
  //       this._auth.setDataInLocalStorage('token', res.token);  
  //       this._router.navigate(['']);
  //     } else { 
        
  //     }
  //   }, err => {
  //     this.errorMessage = err['error'].message;
  //   });
  // }
  
    }
