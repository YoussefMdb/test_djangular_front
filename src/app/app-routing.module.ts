import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddLabelComponent } from './components/add-label/add-label.component';
import { UpdateLabelComponent } from './components/update-label/update-label.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add_label', component: AddLabelComponent },
  { path: 'add_document', component: AddDocumentComponent },
  { path: 'update_label/:id', component: UpdateLabelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
