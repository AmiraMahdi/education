import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
  signupTeacherForm: FormGroup;
  gender:any;
  imagePreview: any;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private userService: UsersService) { }

  ngOnInit() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
    this.signupTeacherForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      tel: [''],
      address: [''],
      speciality: [''],
      img: [''],

     
    })
  }
  addTeacher() {
    
    this.signupTeacherForm.value.role = "teacher";
    this.signupTeacherForm.value.gender = this.gender;

    this.userService.addUser(this.signupTeacherForm.value, this.signupTeacherForm.value.img).subscribe((data) => {
      console.log("Here is signup obj", data);
    });
    console.log("signup clicked", this.signupTeacherForm.value);
    this.router.navigate(['admin']);


  }

  selectTeacherGender(evt: any) {
    console.log("Here is evt", evt.target.value);
    this.gender= evt.target.value;
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupTeacherForm.patchValue({ img: file });
    this.signupTeacherForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
