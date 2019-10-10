import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClarityModule} from '@clr/angular';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { PersonelComponent } from './personel/personel.component';
import { StudentsComponent } from './students/students.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeadernavComponent,
    PersonelComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
