import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpUsersListResponse } from 'src/app/types/httpUsers.type';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: HttpUsersListResponse | undefined;
  constructor(private userService: UsersService) {}

  lastName = _('users.lastName');
  firstName = _('users.firstName');
  

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers(0).subscribe((users) => {
      this.users = users;
      console.log(this.users.data);
    });
  }

  deleteUser(id: number) {
    const indexToDelete: number | undefined = this.users?.data.findIndex(
      (user) => user.id === id
    );
    if (indexToDelete != undefined) {
      this.users?.data.splice(indexToDelete, 1);
      alert('User deleted successfully');
    }
  }
}
