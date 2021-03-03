import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage,
    ) { }

 

}
