import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
   // tslint:disable-next-line
   selector: 'body',
   template: '<router-outlet></router-outlet>'
})


export class AppComponent implements OnInit{
  user:any;
  constructor(private router:Router){

  }

  ngOnInit(){
   // localStorage.removeItem('currentUser');
    // this.user = localStorage.getItem('currentUser');
    // if(this.user==='' || this.user===null || this.user===undefined){
    //   this.router.navigate(['/login']);
    // }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}

