import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CustomerDashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CustomerDashboardComponent,
    RouterModule
  ],
  declarations: [
    CustomerDashboardComponent
  ]
})
export class CustomerDashboardModule { }
