import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbApiService {

  url = 'https://gianluigilamera.info/lechevalier/src/app/util/main.php?subject='
  
  constructor() { }
}
