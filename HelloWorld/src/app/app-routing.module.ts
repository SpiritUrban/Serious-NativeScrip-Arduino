import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    // { path: "home", loadChildren: () => import("~/app/pages/text-to-speech/text-to-speech.module").then((m) => m.TextToSpeechModule) }
    { path: "speech-to-text", loadChildren: () => import("~/app/pages/speech-to-text/speech-to-text.module").then((m) => m.SpeechToTextModule) },
    { path: "test", loadChildren: () => import("~/app/test/test.module").then((m) => m.TestModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
