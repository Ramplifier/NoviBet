import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './components/views/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {AccountviewComponent} from './components/views/accountview/accountview.component';
import {InlogviewComponent} from './components/views/inlogview/inlogview.component';
import {RegistratieviewComponent} from './components/views/registratieview/registratieview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AccountviewComponent,
    InlogviewComponent,
    RegistratieviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
