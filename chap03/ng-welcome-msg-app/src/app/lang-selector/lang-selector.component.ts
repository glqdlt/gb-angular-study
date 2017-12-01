import {Component, OnInit} from '@angular/core';
import {I18nSupportService} from "../i18n-support.service";
import {LANG_METADATA} from "../lang-metadata";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langCode: String;
  langMetadata = LANG_METADATA;

  constructor(public i18nSupporter: I18nSupportService) {
    this.langCode = this.langMetadata.find(x => x.code ==='ko').code;
  }

  ngOnInit() {
  }

  setLangCode(s: string) {
    this.langCode = s;
    this.i18nSupporter.setLangCode(s);

    console.log(`s: ${s}, langcode:${this.langCode}, i18n  : ${this.i18nSupporter.langCode}`);

  }
  syncToService(e){
    this.i18nSupporter.setLangCode(e);
  }
}
