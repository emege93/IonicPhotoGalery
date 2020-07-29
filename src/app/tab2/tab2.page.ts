import { Component } from '@angular/core';
import { PhotoService,  } from '../services/photo.service';
import { Photo } from '../models/photo.inferface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public photos: Photo[] = [];

  constructor( public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved().then(() => {
      this.photos = this.photoService.getPhotos();
    });
  }

  public newPhoto():void {
    this.photoService.addNewToGallery();
  }

}
