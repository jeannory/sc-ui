import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../utils/api-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = ApiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  public getConnectedUser() {
    return this.http.get(this.apiUrl.GET_CONNECTED_USER)
  }

  public getUsers(pageNo: number, pageSize: number, sortBy: string) {
    return this.http.get(this.apiUrl.GET_USERS + '?pageNo=' + pageNo + '&pageSize=' + pageSize + '&sortBy=' + sortBy);
  }
}
