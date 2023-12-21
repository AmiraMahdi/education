import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  path: any;
  gender: any;
  imagePreview: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
    this.signupForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      tel: ['', [Validators.required]],
      img: [''],

    })
  }
  addUser() {
    this.path = this.router.url;
    this.signupForm.value.role = (this.path == "/signupAdmin") ? "admin" : "student";
    this.signupForm.value.gender = this.gender;

    this.userService.addUser(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      console.log("Here is signup obj", data);
    });
    console.log("signup clicked", this.signupForm.value);
    this.router.navigate(['admin']);


  }

  selectGender(evt: any) {
    console.log("Here is evt", evt.target.value);
    this.gender = evt.target.value;
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}
