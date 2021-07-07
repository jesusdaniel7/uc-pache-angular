import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/accounts';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {

  
  constructor(private formbuilder: FormBuilder) { }
  @Output()
  OnSubmit: EventEmitter<Login> = new EventEmitter<Login>();
  
  @Input() evento: string;
  
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          Validators: [Validators.required],
        },
      ],
    });
  }

  Savechanges() {
    this.OnSubmit.emit(this.form.value);
  }
}
