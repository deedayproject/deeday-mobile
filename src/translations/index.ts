import { locale } from 'expo-localization';
import { TranslatorParam, Translations } from '@/types/translator';
import commonFr from './common.fr';
import commonEn from './common.en';

export enum TranslatorLangs {
  FR = 'fr',
  EN = 'en',
}

function getSystemLocale(): string {
    const lang = locale.split('-')[0].toLowerCase();
    return Object.values<string>(TranslatorLangs).includes(lang) ? lang : 'en';
}

export class Translator {
  private translations: Translations;
  public deviceLanguage: string = getSystemLocale();

  constructor() {
    this.translations = {
      [TranslatorLangs.FR]: {
        ...commonFr,
      },
      [TranslatorLangs.EN]: {
        ...commonEn,
      },
    };
  }

  private deepTrans(tree: string[], curr: TranslatorParam): string {
    const current = curr[tree.shift()];
    if (!tree.length) return current as string;

    return this.deepTrans(tree, current as TranslatorParam);
  }

  public trans(key: string, params?: TranslatorParam): string {
    let translation = this.deepTrans(key.split('.'), this.translations[this.deviceLanguage]);
    if (!params) return translation.trim();

    Object.entries(params).forEach(([key, value]) => {
      translation = translation.replace(`{:${key}}`, value.toString());
    });

    return translation.trim();
  }
}

export default new Translator;
