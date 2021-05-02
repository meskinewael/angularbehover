import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamiqueDtaTableService {
  dataTable: Array<string>[] = [];
  data: Array<string>
  constructor()  { 
    
  }

  
}
