import { Injectable } from '@angular/core';
import {LANG_METADATA} from "./lang-metadata";

@Injectable()
export class I18nSupportService {

  langCode;

  constructor() {
    this.langCode = 'ko';
  }

  setLangCode(code : string){
    this.langCode = code;
  }

  getWelcomeMsgByCode(userName: string){
    const langData = LANG_METADATA.find(x => x.code === this.langCode);
    return `${langData.msg}, ${userName} !`;
  }

}
