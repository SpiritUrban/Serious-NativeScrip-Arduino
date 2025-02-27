import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { NavComponent } from './parts/nav/nav.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        // NavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        // NavComponent
    ]
})
export class AppModule { }
