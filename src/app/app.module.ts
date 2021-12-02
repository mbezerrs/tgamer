import { InMemoryData } from './shared/in-memory-data';
import { SignupComponent } from './../component/signup/signup.component';
import { ReportsComponent } from './../component/Reports/Reports.component';
import { LoginComponent } from './../component/login/login.component';
import { HomeComponent } from './../component/home/home.component';
import { DashboardComponent } from './../component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { routing } from './app.routing.module';
import { GameComponent } from 'src/component/game/game.component';
import { Game2Component } from 'src/component/game2/game.component';
import { Game3Component } from 'src/component/game3/game.component';
import { Game4Component } from 'src/component/game4/game.component';
import { Game5Component } from 'src/component/game5/game.component';
import { Game6Component } from 'src/component/game6/game.component';
import { Game7Component } from 'src/component/game7/game.component';
import { Game8Component } from 'src/component/game8/game.component';
import { Game9Component } from 'src/component/game9/game.component';
import { Game10Component } from 'src/component/game10/game.component';
import { Game11Component } from 'src/component/game11/game.component';
import { Game12Component } from 'src/component/game12/game.component';
import { Game13Component } from 'src/component/game13/game.component';
import { Game14Component } from 'src/component/game14/game.component';
import { Game15Component } from 'src/component/game15/game.component';
import { Game16Component } from 'src/component/game16/game.component';
import { Game17Component } from 'src/component/game17/game.component';
import { Game18Component } from 'src/component/game18/game.component';
import { Game19Component } from 'src/component/game19/game.component';
import { Game20Component } from 'src/component/game20/game.component';
import { Game21Component } from 'src/component/game21/game.component';





@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ReportsComponent,
    SignupComponent,
    GameComponent,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    Game6Component,
    Game7Component,
    Game8Component,
    Game9Component,
    Game10Component,
    Game11Component,
    Game12Component,
    Game13Component,
    Game14Component,
    Game15Component,
    Game16Component,
    Game17Component,
    Game18Component,
    Game19Component,
    Game20Component,
    Game21Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    routing,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
