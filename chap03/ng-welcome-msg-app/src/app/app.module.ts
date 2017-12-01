import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeMsgComponent} from './welcome-msg/welcome-msg.component';
import {LangSelectorComponent} from './lang-selector/lang-selector.component';
import {FormsModule} from "@angular/forms";
import {I18nSupportService} from "./i18n-support.service";
import {LangSelectorBtnPipe} from './lang-selector-btn.pipe';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSnackBarModule,
  MatToolbarModule} from "@angular/material";


// page 88 에는 MdToolbarModule 이라되어있는 데, MatToolbarModule 로 바뀌었다. 또한 angular/cdk 가 없어서 로드하는 데 에러가 난다. 아마 책이 쓰일 때와 지금 버전이 많이 바뀐모양
// 알아보니 ngMaterial version 이 5.0 대로 껑충 ㄷ뛰었음, 그래서 cdk 문제가 있엇던것이고, Md ==> Mat으로 바뀜 5.0 대랑 angular 4.0 대랑  호환이 안되서 2.0 으로 강제로 내림. 내리고 난 후엔 아무런 문제가 안생긴다.
// 참고로 https://github.com/angular/material2/issues/8229 를 보면 이때가 1달 전인데, 아직도 문제가 많은듯ㅋㅋ ㅅㅂ
// 근데 2.0 대인데도 MatToolbar로 되어있음, 이것은 무엇인가 ㅡㅢ
@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule,
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
