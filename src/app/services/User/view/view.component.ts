// import { Component, OnInit } from '@angular/core';
// import { ViewService } from './view.service';
// import { User } from 'src/app/models/user';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['../../../app.component.css'],
// })
// export class ViewComponent implements OnInit {
//   user = {} as User;

//   constructor(private viewService: ViewService) {}

//   ngOnInit() {
//     this.getUserById(this.user);
//   }


// getUserById(user: User){
//     this.viewService.getUserById(user.id).subscribe(() => {
//       this.user = user;
//     })
//   }

// }