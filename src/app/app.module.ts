import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLabelComponent } from './components/add-label/add-label.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { UpdateLabelComponent } from './components/update-label/update-label.component';
import { UpdateDocumentComponent } from './components/update-document/update-document.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddLabelComponent,
    AddDocumentComponent,
    UpdateLabelComponent,
    UpdateDocumentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
