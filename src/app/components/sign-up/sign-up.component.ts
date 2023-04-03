import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(private registrationService: RegistrationService) { }

  serviceTypes = [
    'Programmer',
    'Chef',
    'Copywriter',
    'Graphic Designer',
    'DJ',
    'Professor',
    'Web designer',
    'Software Developer',
    'Web designer',
    'Technical Writer'
  ]
  cities = [
    'Sandton',
    'Vereeniging',
    'Vanderbijlpark',
    'Germiston',
    'Roodepoort',
    'Centurion',
    'Krugersdorp',
    'Kempton Park',
    'Midrand',
    'Randburg',
    'Roodepoort',
    'Soweto'
  ]
  
  firstName!: any;
  lastName!: any;
  email!: any;
  password!: any;
  phoneNumber!: any;
  serviceType!: any;
  city: any;
  imageUrl?: any;
  
  submit: boolean = false;

  addUser(user: User){
    // console.log(user);
    this.registrationService.addUser(user).subscribe();
  }

  onSubmit(){

    if(!this.firstName){
      alert("please add firstName")
      return;
    }
    if(!this.lastName){
      alert("please add lastName")
      return;
    }
    if(!this.email){
      alert("please add email")
      return;
    }
    if(!this.password){
      alert("please add password")
      return;
    }
    if(!this.phoneNumber){
      alert("please add Phone Number")
      return;
    }
    if(!this.serviceType){
      alert("please add Service Type")
      return;
    }
    if(!this.city){
      alert("please add city")
      return;
    }
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      serviceType: this.serviceType,
      city: this.city,
      imageUrl: this.imageUrl,
    }
    this.addUser(newUser);
    this.submit = true;
    
    this.firstName='';
    this.lastName='';
    this.email='';
    this.password='';
    this.phoneNumber='';
    this.serviceType='';
    this.city='';
    this.imageUrl='';
  }

}
