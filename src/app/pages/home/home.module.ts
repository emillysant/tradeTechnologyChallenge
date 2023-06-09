import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
 }
