import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [

    {
      url: 'https://i2.wp.com/www.antenacritica.com.br/wp-content/uploads/2019/10/le%C3%A3o-10.jpg?resize=600%2C400&ssl=1',
      description:'Lion'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Black-chested_snake-eagle_%28Circaetus_pectoralis%29.jpg/800px-Black-chested_snake-eagle_%28Circaetus_pectoralis%29.jpg',
      description:'Eagle'
    },

  ]

}
