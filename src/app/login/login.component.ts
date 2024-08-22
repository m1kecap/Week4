import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  users = [
    { email: 'user1@gmail.com', password: 'pw1' },
    { email: 'user2@gmail.com', password: 'pw2' },
    { email: 'user3@gmail.com', password: 'pw3' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/account']);  
    } else {
      alert('Invalid account!');  
    }
  }
}
