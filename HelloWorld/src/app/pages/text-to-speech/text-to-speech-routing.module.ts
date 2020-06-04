import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TextToSpeechComponent } from "./text-to-speech.component";

const routes: Routes = [
    { path: "", component: TextToSpeechComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TextToSpeechRoutingModule { }
