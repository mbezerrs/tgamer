import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/component/dashboard/dashboard.component';
import { GameComponent } from 'src/component/game/game.component';
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
import { Game2Component } from 'src/component/game2/game.component';
import { Game20Component } from 'src/component/game20/game.component';
import { Game21Component } from 'src/component/game21/game.component';
import { Game3Component } from 'src/component/game3/game.component';
import { Game4Component } from 'src/component/game4/game.component';
import { Game5Component } from 'src/component/game5/game.component';
import { Game6Component } from 'src/component/game6/game.component';
import { Game7Component } from 'src/component/game7/game.component';
import { Game8Component } from 'src/component/game8/game.component';
import { Game9Component } from 'src/component/game9/game.component';
import { HomeComponent } from 'src/component/home/home.component';
import { LoginComponent } from 'src/component/login/login.component';
import { ReportsComponent } from 'src/component/Reports/Reports.component';
import { SignupComponent } from 'src/component/signup/signup.component';


const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'game', component: GameComponent },
  { path: 'game2', component: Game2Component },
  { path: 'game3', component: Game3Component },
  { path: 'game4', component: Game4Component },
  { path: 'game5', component: Game5Component },
  { path: 'game6', component: Game6Component },
  { path: 'game7', component: Game7Component },
  { path: 'game8', component: Game8Component },
  { path: 'game9', component: Game9Component },
  { path: 'game10', component: Game10Component },
  { path: 'game11', component: Game11Component },
  { path: 'game12', component: Game12Component },
  { path: 'game13', component: Game13Component },
  { path: 'game14', component: Game14Component },
  { path: 'game15', component: Game15Component },
  { path: 'game16', component: Game16Component },
  { path: 'game17', component: Game17Component },
  { path: 'game18', component: Game18Component },
  { path: 'game19', component: Game19Component },
  { path: 'game20', component: Game20Component },
  { path: 'game21', component: Game21Component },
  { path: 'home', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
];



export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
