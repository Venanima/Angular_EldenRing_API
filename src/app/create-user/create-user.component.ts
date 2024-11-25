import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  // chekoutForm = this.formBuilder.group({
  //   login: '',
  //   password: ''
  // });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void{
    // this.chekoutForm.reset();
  }
}
