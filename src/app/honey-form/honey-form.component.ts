import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HoneyFormService } from '../honey-form.service';

@Component({
  selector: 'app-honey-form',
  templateUrl: './honey-form.component.html',
  styleUrls: ['./honey-form.component.scss']
})
export class HoneyFormComponent implements OnInit {
  honeyForm!: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private honeyContact: HoneyFormService
  ) {}

  formValues = [
    'To order honey!',
    'To donate honey jars!',
    'To donate bees!', 
    'To donate equipment!',
    'To learn more in general.'
  ]

  ngOnInit(): void {
    this.honeyForm = this.formBuilder.group({
      firstName: this.formBuilder.control('',
      Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control('',
      Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      email: this.formBuilder.control('',
      Validators.email),
      phoneNumber: this.formBuilder.control('',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ])),
      contactReason: this.formBuilder.control('', 
      Validators.required)
    })
  }

  showConfirmation() {
    this.formSubmitted = true
  }
  
  onSubmit(honeyForm: any) {
    this.formSubmitted = true;
    this.honeyContact.sendEmail(honeyForm)
      .subscribe(() => {
        console.log('form was sent')
        this.showConfirmation();
      })
  }
}


