import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute) {
    //responsavel por injeção de dependencia.
  }
  
  ngOnInit(): void {

    const userName = this.activateRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => {
        this.photos = photos
      })

    }
}
