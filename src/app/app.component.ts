import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'template-angular-simple';
  public logged: string | null = '';

  constructor(
    private router:Router,
    private elementRef: ElementRef
    ){}

  async ngOnInit() {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = '#ffffff';
  
    this.logged = await localStorage.getItem('LOGGED');
    if(this.logged == 'true'){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login'])
    }
  
  }
}
