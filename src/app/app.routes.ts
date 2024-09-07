import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
