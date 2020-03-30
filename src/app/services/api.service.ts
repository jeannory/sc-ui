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
}
