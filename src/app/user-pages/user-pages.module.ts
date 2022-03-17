import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserPagesModule { }
