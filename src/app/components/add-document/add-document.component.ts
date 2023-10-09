import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/documents.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css'],
})
export class AddDocumentComponent {
  constructor(
    private documentService: DocumentsService,
    private router: Router
  ) {}

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  addDocument() {
    this.data = this.form.value;
    this.documentService.addDocument(this.data).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
