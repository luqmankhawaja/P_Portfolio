import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'resume', component: ResumeComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
