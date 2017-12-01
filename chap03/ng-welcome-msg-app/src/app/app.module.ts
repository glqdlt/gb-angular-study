import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeMsgComponent} from './welcome-msg/welcome-msg.component';
import {LangSelectorComponent} from './lang-selector/lang-selector.component';
import {FormsModule} from "@angular/forms";
import {I18nSupportService} from "./i18n-support.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
