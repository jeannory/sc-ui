import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  public errorMessage: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getConnectedUser()
    .subscribe(data => {
      this.user = data;
    }, err => {
      console.log('err.error.message : ' + err.error.message);
      this.errorMessage = err.error.message;
    });
  }

}
