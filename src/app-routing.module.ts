import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MomotaComponent } from './members/momota.component';
import { TamaiComponent } from './members/tamai.component';
import { SasakiComponent } from './members/sasaki.component';
import { TakagiComponent } from './members/takagi.component';

const routes: Routes = [
    { path: '', redirectTo: '/momota', pathMatch: 'full' },
    { path: 'momota', component: MomotaComponent},
    { path: 'tamai', component: TamaiComponent},
    { path: 'sasaki', component: SasakiComponent},
    { path: 'takagi', component: TakagiComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})

export class AppRoutingModule {}

