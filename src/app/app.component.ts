import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  showPassword = false;
  password = 'hahaha';
  clicks = [];
  iterator = 1;

  getPassword() {
    this.showPassword = !this.showPassword;
    // this.clicks.push(this.iterator);
    this.clicks.push(new Date());
    this.iterator++;
    return this.password;
  }

  getBackgroundColor($event) {
    return $event > 5 ? 'blue' : 'white';
  }

}
