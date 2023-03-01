import { Injectable } from '@angular/core';
import { IWork } from 'src/app/models/work';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // Get work
  getWorkList(): Observable<IWork[]> {
    return this.httpClient.get<IWork[]>('assets/data/work.json');
  }

  // Get project
  getWork() : void {
    
  }
}
