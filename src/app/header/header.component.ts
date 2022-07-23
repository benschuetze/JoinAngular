import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  board: boolean = false;
  add: boolean = true;
  constructor(private _router: Router) {
   }

  ngOnInit(): void {
  }


  //showing content based on route 
  route(route: string) {  
    return this._router['url'].includes(route);
  }

  goToBoard() {
    this._router.navigateByUrl('/board');
  }

  goToAddTask() {
    this._router.navigateByUrl('/');
  }
}
