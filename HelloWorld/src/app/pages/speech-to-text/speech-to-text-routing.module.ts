import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SpeechToTextComponent } from "./speech-to-text.component";

const routes: Routes = [
  { path: "", component: SpeechToTextComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SpeechToTextRoutingModule { }
