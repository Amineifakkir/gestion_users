import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpUsersListResponse } from '../types/httpUsers.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(protected http: HttpClient) {}
  private envLink = environment.baseUrl;
  public perPage = 6;

  getUsers(page: Number): Observable<HttpUsersListResponse> {
    return this.http.get(
      `${this.envLink}users?page=${page}&per_page=${this.perPage}`
    ) as Observable<HttpUsersListResponse>;
  }
}
