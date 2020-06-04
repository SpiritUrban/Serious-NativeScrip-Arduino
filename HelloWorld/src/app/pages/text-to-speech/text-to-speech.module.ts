import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TextToSpeechComponent } from './text-to-speech.component';
import { TNSTextToSpeech } from 'nativescript-texttospeech';

import { TextToSpeechRoutingModule } from "./text-to-speech-routing.module";


@NgModule({
  declarations: [TextToSpeechComponent],
  imports: [
    NativeScriptCommonModule,
    TextToSpeechRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    TNSTextToSpeech
  ]
})

export class TextToSpeechModule { }




