import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeFormComponent } from './cake-form/cake-form.component';
import { HttpService } from './http.service';
import { AddCommentsComponent } from './add-comments/add-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeFormComponent,
    AddCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent, CakeFormComponent, AddCommentsComponent]
})
export class AppModule { }