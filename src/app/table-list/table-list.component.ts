import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  users: any;
  public errorMessage: any;
  pageNo: number;
  pageSize: number;
  sortBy;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.pageNo = 0;
    this.pageSize = 10;
    this.sortBy = 'id';
    this.getUsers(this.pageNo, this.sortBy);
  }

  getUsers(pageNo: number, sortBy: string) {
    this.apiService.getUsers(pageNo, this.pageSize, this.sortBy)
      .subscribe(data => {
        this.users = data;
        this.cancelNext(this.users.length);
      }, err => {
        console.log('err.error.message : ' + err.error.message);
        this.errorMessage = err.error.message;
      });
  }

  navigateBefore() {
    if (this.pageNo !== 0) {
      this.pageNo -= 1;
      this.getUsers(this.pageNo, this.sortBy);
    }
  }

  navigateNext() {
    this.pageNo += 1;
    this.getUsers(this.pageNo, this.sortBy);
  }

  cancelNext(size: number) {
    console.log('size : ' + + size);
    if (size === 0) {
      this.pageNo -= 1;
      this.getUsers(this.pageNo, this.sortBy);
    }
  }

  sortById() {
    this.sortBy = 'id';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByGender() {
    this.sortBy = 'gender';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByUsername() {
    this.sortBy = 'username';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByFirstName() {
    this.sortBy = 'firstName';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByLastname() {
    this.sortBy = 'lastName';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByEmail() {
    this.sortBy = 'email';
    this.getUsers(this.pageNo, this.sortBy);
  }

  sortByStatus() {
    this.sortBy = 'status';
    this.getUsers(this.pageNo, this.sortBy);
  }

}
