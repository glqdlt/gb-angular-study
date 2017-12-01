import {AfterViewInit, Component} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-welcome-msg',
  styleUrls: ['./welcome-msg.component.css'],
  template: `

    <!--
    <h4>{{welcomeMsg}}</h4>
  <div class="contents">
    <label for="user-name">사용자 이름:</label>
    <input type="text" name="user-name" id="user-name" [(ngModel)]="userName" (ngModelChange)="onChange()"/>
    <button type="button" (click)="showWelcomeMsg()">입력</button>
  </div>
  -->

    <mat-card>
      <div class="contents">
        <mat-input-container>
          <input matInput name="value" placeholder="사용자 이름" [(ngModel)]="userName" (ngModelChange)="onChange()"/>
        </mat-input-container>
        <button mat-raised-button (click)="showWelcomeMsg()">입력</button>
        <span class="welcome-msg">{{welcomeMsg}}</span>
      </div>
    </mat-card>
  `
})
export class WelcomeMsgComponent implements AfterViewInit {
  private static CHK_KEY_UP_WAIT_SEC = 5000;

  private valid;
  userName;
  welcomeMsg;


  constructor(public i18nSupporter: I18nSupportService, private snackbar: MatSnackBar) {
    this.userName = '';
    this.welcomeMsg = '';
    this.valid = false;
  }



  // matSnackbar 기능을 쓴 뒤로 이상한 에러가 콘솔에 찍힌다.
  // TODO ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'undefined'. Current value: 'visible-bottom'. It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?
  // 대충 이러한데.. 기능은 잘작동한다, 알아보기에는 시간이 없어서 TO.DO 로 남겨놓는다.

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      this.snackbar.open('이름을 입력해 주세요', '확인');
    };
    setTimeout(checkTouchedFn(), WelcomeMsgComponent.CHK_KEY_UP_WAIT_SEC);
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
  onChange() {
    console.log(`on Change Call : ${this.userName.length}`);
    this.valid = this.userName.length > 0;
  }
}
