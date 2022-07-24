import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  floatField:any = document.getElementById('floatField');
  floatContainer:any = document.getElementById('floatContainer');

  ngOnInit(): void {

    this.floatField.addEventListener('focus', () => {
    this.floatContainer.classList.add('active');
    });
    this.floatField.addEventListener('blur', () => {
    this.floatContainer.classList.remove('active');
});

  }

}
