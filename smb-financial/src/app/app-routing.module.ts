import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/contact/contact.component';
import { WelcomeComponent } from 'src/welcome/welcome.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
