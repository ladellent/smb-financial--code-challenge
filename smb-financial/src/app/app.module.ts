import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { FooterComponent } from 'src/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from 'src/services/services.component';
import { AboutComponent } from 'src/about/about.component';
import { ClientsComponent } from 'src/clients/clients.component';
import { NavComponent } from 'src/nav/nav.component';
import { ContactComponent } from 'src/contact/contact.component';
import { WelcomeComponent } from 'src/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    ClientsComponent,
    NavComponent,
    ContactComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
