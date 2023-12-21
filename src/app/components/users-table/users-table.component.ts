import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allUsers } from 'src/app/data/usersData';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: any;
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.allUsers();
  }
  
  allUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data.T;
      }
    )
  };

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log("here is delete response", data.msg);
        this.allUsers();
      }
    )
  }

}
