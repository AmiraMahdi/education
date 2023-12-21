import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseUrl: string = "http://localhost:3000/courses"

  constructor(private httpClient: HttpClient) { }
  addCourse(obj: any, img: File) {
    let fData = new FormData();
    fData.append("img", img);
    fData.append("courseName", obj.courseName);
    fData.append("teacherId", obj.teacherId);
    fData.append("duration", obj.duration);
    fData.append("places", obj.places);
    fData.append("price", obj.price);
    fData.append("description", obj.description);
    
    return this.httpClient.post<{ msg: string }>(this.courseUrl, fData);
  }
  getAllCourses() {
    return this.httpClient.get<{ T: any }>(this.courseUrl);
  }
  getCourseById(id: number) {
    return this.httpClient.get<{ courseFound: any }>(`${this.courseUrl}/${id}`);
  }
  updateCourse(obj: any) {
    return this.httpClient.put<{ msg: string }>(this.courseUrl, obj);
  }
  deleteCourse(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.courseUrl}/${id}`);
  }


}
