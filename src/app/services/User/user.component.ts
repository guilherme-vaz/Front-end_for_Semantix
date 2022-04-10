import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../app.component.css'],
})
export class UserComponent implements OnInit {
  user = {} as User;
  users: User[];
  editing = false
  searchText = ''

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  saveUser(form: NgForm) {
    if (this.user.id !== undefined) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.userService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  getUserById(user: User){
    this.userService.getUserById(user.id).subscribe(() => {
      this.user = user;
    })
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  editUser(user: User) {
    this.editing = true;
    this.user = { ...user };
  }

  // limpa o formulário
  cleanForm(form: NgForm) {
    this.editing = false;
    this.getUsers();
    form.resetForm();
    this.user = {} as User;
  }
}
