import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  private host = 'http://localhost:3000/';

  public get(endpoint: string): Observable<any> {
    return this.http.get(this.host + endpoint);
  }

  public post(endpoint: string, payload): Observable<any> {
    return this.http.post(this.host + endpoint, payload);
  }
}
