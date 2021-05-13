import { Component, OnInit } from '@angular/core';
import { userService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Array<Object>;

  constructor(
    private userService: userService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.users = [];
    await this.getUsers();
  }

  async getUsers() {
    this.users = await this.userService.getUsers();
  }

  goToCreate() {
    this.router.navigate(['user-create']);
  }

  async deleteUser(id: string) {
    const resp = await this.userService.deleteUser(id);
    if (resp) {
      this.users = this.users.filter((user) => {
        return user['id'] !== id;
      });
    }
  }

}
