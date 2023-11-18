import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import{ModalModule} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './Components/project-modal/project-modal.component'
import{CarouselModule} from 'ngx-bootstrap/carousel';
import{CollapseModule} from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import{AccordionModule} from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ProjectModalComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
