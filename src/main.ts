import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app/router';
import { RouterModule } from '@angular/router';



bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule.forRoot(routes)
    )
    
  ]
})