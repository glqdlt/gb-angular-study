import {AfterViewInit, Component, OnInit} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";

@Component({
  selector: 'app-welcome-msg',
  template: `<h4>{{welcomeMsg}}</h4>
  <div class="contents">
    <label for="user-name">사용자 이름:</label>
    <input type="text" name="user-name" id="user-name" [(ngModel)]="userName" (ngModelChange) = "onChange()"/>
    <button type="button" (click)="showWelcomeMsg()">입력</button>
  </div>
  `
})
export class WelcomeMsgComponent implements AfterViewInit {
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;
  userName = '';
  welcomeMsg = '';


  constructor(public i18nSupporter : I18nSupportService) {

  }

  showWelcomeMsg(){
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName,'ko');
  }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      alert('이름을 입력해 주세요');
    };
    setTimeout(checkTouchedFn(), WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  // 이 기능은 이제 onChange에서 처리한다.
  // onKeyUp(name) {
  //   this.valid = name.length > 0;
  // }

  // 이 기능은 이제 showWelcomeMsg 에서 처리한다.
  // setName(name) {
  //   this.userName = name;
  // }

  // 양방향바인딩에서 한글 입력시에는 문제가 있다고 한다, 이건 한글이라는 문자가 조합형 문자이기 때문에, 스페이스나 엔터 등의 라스트 이벤트를 통해야지 내가 입력이 끝났는지를 안다고 한다.
  // 이를 처리하기 위해서는 Angular의 Composition_buffer_mode 를 사용해야 한다고 한다. 문제가 생길 때 알아보도록 한다.
  onChange(){
    this.valid = this.userName.length > 0;
  }
}
