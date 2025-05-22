import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/users.model';

@Component({
  selector: 'app-users-dashboard',
  imports: [],
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {
  userService = inject(UserService);
  userList = signal<User[]>([]);

  getUsers(): void {
    console.log(this.userService.getAllUsers());
    console.log('userList: ', this.userList()); 
  }

  ngOnInit() {
    this.userList.set(this.userService.getAllUsers());
  }
}
