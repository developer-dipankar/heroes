import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  surveyForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.surveyForm = new FormGroup({
      'userData': new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email])
      }),
      'age' : new FormControl(30),
      'hobbies': new FormArray([]),
    })
  }

  surveySubmit() {
    console.log(this.surveyForm);
  }

  onAddHobby(){
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.surveyForm.get('hobbies')).push(hobbyControl);
  }
}
