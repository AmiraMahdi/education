import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  banner: string = "Course info";
  courseId: any;
  foundCourse: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("here is course id", this.courseId);
    this.foundCourse = this.coursesService.getCourseById(this.courseId).subscribe(
      
        (data)=>{
          this.foundCourse= data.courseFound;
          console.log("course obj",data.courseFound)
        }
        
        
      );


    // this.foundCourse = this.courses.find(
    //   (obj: any) => { return obj.id == this.courseId }
    // );
    // console.log('here is foundCourse', this.foundCourse);
  }
}
