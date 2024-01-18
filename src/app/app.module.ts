import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdFormComponent } from './share/components/td-form/td-form.component';
import { ReactivformComponent } from './share/components/reactivform/reactivform.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    ReactivformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
