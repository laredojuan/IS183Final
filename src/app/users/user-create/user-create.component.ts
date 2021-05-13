import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: Object;

  constructor(
    private userService: userService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {};
  }

  async createUser(user: Object) {
    const resp = await this.userService.addUser(user);
    if (resp) {
      this.router.navigate(['/users']);
    }
  }

}
