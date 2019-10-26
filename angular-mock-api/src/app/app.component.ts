import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$ = this.http.get('https://jsonplaceholder.typicode.com/users');

  constructor(private http: HttpClient) { }
}
