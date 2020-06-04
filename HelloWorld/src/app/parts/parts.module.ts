import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { NavComponent } from './nav/nav.component';

import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
  declarations: [NavComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavComponent]
})
export class PartsModule { }
