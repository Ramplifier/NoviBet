import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/views/dashboard/dashboard.component";
import {AccountviewComponent} from "./components/views/accountview/accountview.component";
import {InlogviewComponent} from "./components/views/inlogview/inlogview.component";
import {RegistratieviewComponent} from "./components/views/registratieview/registratieview.component";

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'account', component: AccountviewComponent},
  {path: 'inlog', component: InlogviewComponent},
  {path: 'registratie', component: RegistratieviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
