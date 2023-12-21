import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;
  courseId: any;
  teacherId: any;
  teachers: any = [];
  users: any = [];
  banner: string = "Add Course"
  obj: any = {};
  imagePreview: any;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data.T;
      this.teachers = this.users.filter((teacher: any) => { return teacher.role == "teacher" })
    })
    this.addCourseForm = this.formBuilder.group({
      courseName: [''],
      price: [''],
      duration: [''],
      places: [''],
      description: [''],
      img: [''],

    })
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.banner = "Edit Course"
      this.coursesService.getCourseById(this.courseId).subscribe(
        (data) => {
          this.obj = data.courseFound;
          console.log("course obj", data.courseFound)
        }

      );

    };


  }
  addOrEditCourse() {
    if (this.courseId) {
      this.coursesService.updateCourse(this.obj).subscribe(
        (data) => {
          console.log("here edit data", data.msg);

        }
      );
    } else {
      this.obj.teacherId = this.teacherId;
      this.obj.img = this.addCourseForm.value.img;
      console.log("Here is final obj", this.obj);
      this.coursesService.addCourse(this.obj, this.obj.img).subscribe(
        (data) => {

          console.log("here add data", data.msg)

        })
    }
    this.router.navigate(['admin']);

  };
  selectTeacher(evt) {
    console.log("Here is evt", evt.target.value);
    this.teacherId = evt.target.value;
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addCourseForm.patchValue({ img: file });
    this.addCourseForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
