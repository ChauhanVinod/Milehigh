import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParameter } from './model/LoginParameter';
import { APIService } from 'src/app/service/api.service';
import { User } from './model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginParameter:LoginParameter;
  user:User;
  loginForm: FormGroup;
  loading = false;
  submitted = false;

 
  constructor(private apiService: APIService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }


   onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }


        this.loginParameter = new LoginParameter();

        this.loginParameter.email = this.f.username.value;
        this.loginParameter.password = this.f.password.value;
        this.loginParameter.device_type = 'Android';
        this.loginParameter.role_id = '1';
    
    
        this.apiService.login(this.loginParameter).subscribe((res)=>{
          this.apiService.customConsole(res);
          this.user = res;
          if(res.status==='success'){
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.router.navigate(['/dashboard']);
          }
        
        });
  }

}
