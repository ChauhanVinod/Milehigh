import { Component, OnDestroy, Inject , OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from 'src/app/_nav';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './defaultlayout.component.html'
})
export class DefaultlayoutComponent implements OnInit {
  public spinKit = Spinkit;
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  
  constructor(private router:Router,@Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit(){
    
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
