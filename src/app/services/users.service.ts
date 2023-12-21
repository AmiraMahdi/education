import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl: string = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) {
  }
  addUser(obj: any, img: File) {
    let fData = new FormData();
    fData.append("img", img);
    fData.append("firstName", obj.firstName);
    fData.append("lastName", obj.lastName);
    fData.append("email", obj.email);
    fData.append("gender", obj.gender);
    fData.append("tel", obj.tel);
    fData.append("password", obj.password);
    fData.append("role", obj.role);
    if (obj.role == "teacher") {
      fData.append("address", obj.address);
      fData.append("speciality", obj.speciality);
    }

    return this.httpClient.post<{ msg: any }>(`${this.userUrl}/signup`, fData);
  }

  login(obj: any) {
    return this.httpClient.post<{ msg: any }>(`${this.userUrl}/login`, obj);
  }

  getAllUsers() {
    return this.httpClient.get<{ T: any }>(this.userUrl)
  }

  deleteUser(id: number) {
    return this.httpClient.delete<{ msg: string }>(`${this.userUrl}/${id}`)
  }
}
