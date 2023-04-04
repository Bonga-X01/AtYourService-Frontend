import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { LoginService } from 'src/app/services/login.service';
import { LoginInfo } from 'src/app/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private loginService: LoginService) { }
  
  phoneNumber!: any;
  password!: any;

  submit: boolean = false;
  user!: User;

  loginUser(loginInfo: LoginInfo){
    
  }

  onSubmit(){
    if(!this.phoneNumber){
      alert("please add phoneNumber")
      return;
    }
    if(!this.password){
      alert("please add password")
      return;
    }
    const loginInfo = {
      phoneNumber: this.phoneNumber,
      password: this.password,
    }
    
    // LOGIN SERVICE
    this.loginService.loginUser(loginInfo).subscribe(
      (
        (res) => {
            this.user = res;
            console.log(this.user)
            this.submit = true;
            this.phoneNumber='';
            this.password='';
        }
      )
    );
  }

}
