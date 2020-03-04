import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service'
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  photos: any[] = [];

  constructor(private photoService: PhotoService) {
    //responsavel por injeção de dependencia.
  }
  
  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos
      })

    }

}
