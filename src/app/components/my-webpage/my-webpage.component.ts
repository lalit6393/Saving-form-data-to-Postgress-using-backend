import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntroService } from 'src/app/services/intro/intro.service';

@Component({
  selector: 'app-my-webpage',
  templateUrl: './my-webpage.component.html',
  styleUrls: ['./my-webpage.component.css']
})
export class MyWebpageComponent implements OnInit {

  title = "My Webpage";

  constructor(
    private router: Router,
    private introService : IntroService
  ) { }

  ngOnInit(): void {
    this.introService.getDemo().subscribe((res:any) => {
      // this.title = res.data;
    })
  }

}
