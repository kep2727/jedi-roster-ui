import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class JediService {
  public API = '//localhost:8080';
  public JEDI_API = this.API + '/jedis';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-jedis');
  }

  get(id: string) {
    return this.http.get(this.JEDI_API + '/' + id);
  }

  save(jedi: any): Observable<any> {
    let result: Observable<Object>;
    if (jedi['href']) {
      result = this.http.put(jedi.href, jedi);
    } else {
      result = this.http.post(this.JEDI_API, jedi);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
