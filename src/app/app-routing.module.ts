import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"courses", component:CoursesPageComponent},
  {path:"courseInfo/:id", component:CourseInfoComponent},
  {path:"events", component:EventsPageComponent},
  {path:"signup", component:SignupComponent},
  {path:"signupAdmin", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminComponent},
  {path:"addCourse", component:AddCourseComponent},
  {path:"editCourse/:id", component:AddCourseComponent},
  {path:"addEvent", component:AddEventComponent},
  {path:"eventInfo/:id", component:EventInfoComponent},
  {path:"editEvent/:id", component:AddEventComponent},
  {path:"signupTeacher", component:SignupTeacherComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
