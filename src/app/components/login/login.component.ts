import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  obj: any = {};
  banner: string = "Login";
  erreur: string = "";

  constructor(private userService: UsersService,
    private router: Router) { }
  ngOnInit() {
  }

  login() {
    this.userService.login(this.obj).subscribe(
      (data) => {
        if (data.msg == "User found") {
          this.router.navigate(['']);
        } else {
          this.erreur = "user not found"
        }

      });
  }
}
