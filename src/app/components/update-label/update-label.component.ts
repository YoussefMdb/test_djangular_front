import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabelsService } from 'src/app/labels.service';

@Component({
  selector: 'app-update-label',
  templateUrl: './update-label.component.html',
  styleUrls: ['./update-label.component.css'],
})
export class UpdateLabelComponent {
  label: any;
  data: any;
  constructor(
    private labelService: LabelsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.labelService.getLabelById(id).subscribe((data) => {
      this.label = data;
      console.log(data);
    });
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
  });

  submit() {
    this.data = this.form.value;
    this.label.name = this.data.name;
    this.label.color = this.data.color;
    console.log(this.data);

    this.labelService
      .updateLabel(this.label?.id, this.label)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }
}
