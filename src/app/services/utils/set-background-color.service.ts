import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetBackgroundColorService {

  constructor(private readonly elementRef: ElementRef) { }

  public setBackgroundColor(color: string){
    this.elementRef.nativeElement.ownerDocument
    .body.style.background = color;

  }
  
}
