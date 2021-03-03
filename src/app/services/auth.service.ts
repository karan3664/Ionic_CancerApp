import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService,
    private storageService: StorageService,
    public storage: Storage,
    public router: Router,
    public nav: NavController,

  ) { }

  GetMasterEbook(): Observable<any> {
    return this.httpService.get('GetMasterEbook');
  }

  GetEbookTermAlphabetical(postData): Observable<any> {
    return this.httpService.post('GetEbookTermAlphabetical', postData);
  }
  GetEbookTerm(postData): Observable<any> {
    return this.httpService.post('GetEbookTerm', postData);
  }

  GetEbookTermSearch(postData): Observable<any> {
    return this.httpService.post('GetEbookTerm', postData);
  }

  GetTermDescription(posdata): Observable<any> {
    return this.httpService.post('GetTermDescription', posdata);
  }

  GetDrugTerm(posdata): Observable<any> {
    return this.httpService.post('GetDrugTerm', posdata);
  }

  GetDrugTermDescription(posdata): Observable<any> {
    return this.httpService.get('GetDrugTermDescription/' + posdata);
  }
  GetCriticalName(posdata): Observable<any> {
    return this.httpService.post('GetCriticalName', posdata);
  }
  GetCriticalNameDescription(posdata): Observable<any> {
    return this.httpService.get('GetCriticalNameDescription/' + posdata);
  }
}
