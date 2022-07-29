import { Directive, ElementRef, OnInit, HostListener , HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective implements OnInit {
@Input() txtColor : string = 'red';
//@Input('appMyColor') txtColor : string = 'red';
@HostBinding('style.backgroundColor')  backgroundColor : string = 'gold';
@HostBinding('style.color')  color : string;

  constructor(private element: ElementRef) { 
  }
  ngOnInit(): void {
  this.color = this.txtColor;
  }
  
  @HostListener('mouseenter') mo(){
    //this.element.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = 'green';
    //this.color = 'gold';
  }

  @HostListener('mouseleave') ml(){
    //this.element.nativeElement.style.backgroundColor = 'white';
    //this.backgroundColor = 'white';
  }
}
