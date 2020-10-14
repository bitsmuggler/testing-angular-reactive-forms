import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit($event: any) {
    debugger;
    console.log('on submit');
  }
}
