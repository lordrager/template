import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  password: string = '';
  repeatpassword: string = '';
  email: string = '';
  showPassword: boolean = false;
  showRepeatedPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatedPasswordVisibility() {
    this.showRepeatedPassword = !this.showRepeatedPassword;
  }

  SendEmail(){
    console.log("neshto");
  }

  ButtonControll() {
    if(this.password.length<=20 && this.password.length>=8 && this.password!==undefined &&
      this.email.length<=30 && this.email.length>=10 && this.email.includes('@'))
      return true;
    else
      return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
