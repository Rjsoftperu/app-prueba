import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RepositoryService {
  baseUrl = 'https://api.github.com';
  username = 'codigofacilito';
  constructor(private http: Http) { }
  getRepos() {
    return this.http.get(this.baseUrl + '/users/' + this.username + '/repos');
  }
}
