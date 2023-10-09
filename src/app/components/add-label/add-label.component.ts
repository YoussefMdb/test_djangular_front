import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelsService } from 'src/app/labels.service';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.css'],
})
export class AddLabelComponent {
  constructor(private labelService: LabelsService, private router: Router) {}

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
  });

  addLabel() {
    this.data = this.form.value;
    this.labelService.addLabel(this.data).subscribe((data) => {
      this.router.navigate(['/']); // redirect to homepage
    });
  }
}
