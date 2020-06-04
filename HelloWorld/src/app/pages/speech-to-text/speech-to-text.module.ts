import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SpeechToTextRoutingModule } from './speech-to-text-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SpeechToTextComponent } from './speech-to-text.component';


@NgModule({
  declarations: [SpeechToTextComponent],
  imports: [
    SpeechToTextRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SpeechToTextModule { }
