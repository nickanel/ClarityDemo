import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonelComponent } from './personel/personel.component';
import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'personel', component: PersonelComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'home', component: HomeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
