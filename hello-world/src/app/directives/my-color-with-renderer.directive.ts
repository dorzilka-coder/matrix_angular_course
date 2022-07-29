import { Directive, ElementRef, OnInit, HostListener , HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyColorWithRenderer]'
})
export class MyColorWithRedererDirective implements OnInit {
@Input() txtColor : string = 'red';
  constructor(private element: ElementRef,private renderer: Renderer2) { 
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,'background-color',this.txtColor);
    this.renderer.setStyle(this.element.nativeElement,'color','white');
  }

}
