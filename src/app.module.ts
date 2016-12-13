import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MomotaComponent } from './members/momota.component';
import { TamaiComponent } from './members/tamai.component';
import { SasakiComponent } from './members/sasaki.component';
import { AriyasuComponent } from './members/ariyasu.component';
import { TakagiComponent } from './members/takagi.component';

import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports : [
        BrowserModule,
        AppRoutingModule,
        ClarityModule
    ],
    declarations: [
        AppComponent,
        MomotaComponent,
        TamaiComponent,
        SasakiComponent,
        AriyasuComponent,
        TakagiComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
