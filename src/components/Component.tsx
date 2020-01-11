import React from 'react';
import translator, { Translator } from '@/translations';
import { TranslatorParam } from '@/types/translator';


export default abstract class Component<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  public $translator: Translator = translator;

  $t(key: string, params?: TranslatorParam): string {
    return this.$translator.trans(key, params);
  }

  abstract render(): React.ReactNode
}