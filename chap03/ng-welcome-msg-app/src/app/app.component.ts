import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h4>
    <span id="display-name">{{userName}}</span>님 환영합니다
  </h4>
  <div class="contents">
    <label for="user-name">사용자 이름:</label>
    <input type="text" name="user-name" id="user-name" #nameInput/>
    <button type="button" (click)="setName(nameInput.value)">입력</button>
  </div>
  `
})
export class AppComponent {
  userName = '';

  setName(name){
    this.userName = name;
  }
}
