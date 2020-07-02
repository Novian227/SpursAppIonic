import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpursService {
  lookup = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php';
  lastmatch = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php';
  teamid = '133616';

  constructor(private http: HttpClient) { }

  getDetail(){
    return this.http.get(`${this.lookup}?id=${this.teamid}`);
  }

  getLastMatch(){
    return this.http.get(`${this.lastmatch}?id=${this.teamid}`);
  }
}
