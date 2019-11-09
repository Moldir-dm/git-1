import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule , FormArray} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

ngOnInit() {
}
profileForm : FormGroup;
constructor(private formBuilder: FormBuilder){
this.profileForm = formBuilder.group({
"firstName" : ["", Validators.required],
"lastName": ["", Validators.required],
"age": ["", Validators.required],
"userEmail": ["", [
Validators.required,
Validators.email
]],
"phones" :formBuilder.array([["+7", Validators.required]]),
"logins" : formBuilder.array([["", Validators.required]]),
"passwords": formBuilder.array([["", Validators.required]])
});
}
submit(){
console.log(this.profileForm);
this.profileForm = this.formBuilder.group({
"firstName" : ["", Validators.required],
"lastName": ["", Validators.required],
"age": ["", Validators.required],
"userEmail": ["", [
Validators.required,
Validators.email
]],
"phones" : this.formBuilder.array([["+7", Validators.required]]),
"logins" : this.formBuilder.array([["", Validators.required]]),
"passwords": this.formBuilder.array([["", Validators.required]])
});
}
}