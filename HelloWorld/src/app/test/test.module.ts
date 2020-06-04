import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TestRoutingModule } from "./test-routing.module";
import { TestComponent } from "./test.component";

import { TNSTextToSpeech } from 'nativescript-texttospeech';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        TestRoutingModule
    ],
    declarations: [
        TestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
        TNSTextToSpeech
    ]
})
export class TestModule { }
