import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:any;
 username:'';
 password:'';
  constructor(public userService:UserService, private router:Router) { }
 ngOnInit(){
  this.userService.getData().subscribe((data=>{
    this.user=data
    console.log(this.user)
  }));
 }
 onSubmit(value){
   console.log(value);
   
  for(let i=0;i<this.user.length;i++){
    if(this.username == this.user[i].email && this.password == this.user[i].password){
      alert('Welcome');
      this.router.navigate(['animation']);
      break;
    }
    else
    { 
      alert('Invalid');
      break;
    }
  }
 }
}
