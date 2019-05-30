import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ UserService } from '../user.service';
import { MatSnackBar } from '@angular/material';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User("", "","","","")
  constructor(private userService:UserService,private snackBar: MatSnackBar) { }
  onSubmit() {
    let pword = this.user['ConfirmPassword']
    delete this.user['ConfirmPassword']
    this.userService.Signup(this.user).subscribe((value: string)=>{
        console.log(value['ret'])

        value['ret'] !== undefined ? this.openSnackBar(value['ret'], "close"):""
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
    }, (error)=>{
      this.openSnackBar(error.Message, "close")
      console.log(error)
    })
    
    this.user['ConfirmPassword'] = pword
    //delete newObject['ConfirmPassword']
    //console.log('SUCCESS!! :-)\n\n' + JSON.stringify(newObject))
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnInit() {
  }



}
