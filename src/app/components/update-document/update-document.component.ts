import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsService } from 'src/app/documents.service';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css'],
})
export class UpdateDocumentComponent {
  document: any;
  data: any;

  constructor(
    private documentService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.documentService.getDocumentById(id).subscribe((data) => {
      this.document = data;
      console.log(data);
    });
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  submit() {
    this.data = this.form.value;
    this.document.name = this.data.name;
    this.document.content = this.data.content;
    console.log(this.data);

    this.documentService
      .updateDocument(this.document?.id, this.document)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }
}
