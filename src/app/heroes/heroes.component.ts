import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [ConfigService]
})


export class HeroesComponent implements OnInit {

  public characters : any;

  constructor(private service: ConfigService) {
    this.characters = service.getList();
     
   }

  ngOnInit(): void {
    
  }


 

}
