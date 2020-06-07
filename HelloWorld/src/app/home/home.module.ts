import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

// import { NavComponent } from '../parts/nav/nav.component';

import { PartsModule } from '../parts/parts.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        PartsModule
        // NavComponent
        // AppModule
    ],
    declarations: [
        HomeComponent,
        // NavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
    ]
})
export class HomeModule { }
