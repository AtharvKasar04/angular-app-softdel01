import { Injectable, signal } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = signal<User[]>([])

  addUser(user: User) {
    this.users.update(currentUsers => [...currentUsers, user]);
  }

  validateUser(email: string, password: string): boolean {
    const existingUsers = this.users();
    return existingUsers.some(u => u.email === email && u.password === password);
  }

  getAllUsers(): User[] {
    console.log(`Current number of users: ${this.users().length} ...from user.service.ts`);
    return this.users();
  }

  constructor() { }
}
