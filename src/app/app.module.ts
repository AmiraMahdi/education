import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { CourseComponent } from './components/course/course.component';
import { BestTutorsComponent } from './components/best-tutors/best-tutors.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddEventComponent } from './components/add-event/add-event.component';

import { EventsTableComponent } from './components/events-table/events-table.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { CourseInfoComponent } from './components/course-info/course-info.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WelcomeSectionComponent,
    CoursesComponent,
    SubscriptionComponent,
    EventsComponent,
    EventComponent,
    CourseComponent,
    BestTutorsComponent,
    TutorComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SignupTeacherComponent,
    AddCourseComponent,
    AddEventComponent,
   
    EventsTableComponent,
    CoursesTableComponent,
    UsersTableComponent,
    CoursesPageComponent,
    EventsPageComponent,
    AdminComponent,
    BannerComponent,
    EventInfoComponent,
    CustomFilterPipe,
    CourseInfoComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
