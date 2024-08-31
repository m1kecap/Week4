import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BACKEND_URL = 'http://localhost:8080';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private router: Router, private httpClient: HttpClient) {}
  submit(){
    let user = {username:this.email, pwd: this.password};
    this.httpClient.post(BACKEND_URL + '/login', user, httpOptions)
    .subscribe((data: any) => {
      console.log("Response from server:", data);
      alert("posting: " + JSON.stringify(user));
      alert("postRes: " + JSON.stringify(data));
      if (data.ok) {
        sessionStorage.setItem('userid', data.userid.toString());
        sessionStorage.setItem('userlogin', data.ok.toString());
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('userbirthdate', data.userbirthdate);
        sessionStorage.setItem('userage', data.userage.toString());
        this.router.navigateByUrl("/account");
      }
      else { alert("email or password incorrect");}
    })
  }
}



