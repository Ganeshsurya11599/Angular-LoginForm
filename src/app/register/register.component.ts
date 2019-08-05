import { Component, OnInit } from '@angular/core';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user:any={
   name:'',
   email:'',
   password:''
 };
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
  onSubmit(value){
    this.userService.postData(value).then((data=>{
      this.user=data
      console.log(this.user)
      alert('Registered Successfully')
    }));
  }
}
