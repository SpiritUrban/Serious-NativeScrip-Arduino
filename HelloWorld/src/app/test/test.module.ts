import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TestRoutingModule } from "./test-routing.module";
import { TestComponent } from "./test.component";

import { TNSTextToSpeech } from 'nativescript-texttospeech';

// import { NavComponent } from '../parts/nav/nav.component';
import {PartsModule} from '../parts/parts.module'


@NgModule({
    imports: [
        NativeScriptCommonModule,
        TestRoutingModule,
        PartsModule
    ],
    declarations: [
        TestComponent,
        // NavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
        TNSTextToSpeech
    ]
})
export class TestModule { }
