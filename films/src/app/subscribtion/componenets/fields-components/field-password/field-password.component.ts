import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-password',
  templateUrl: './field-password.component.html',
  styleUrls: ['./field-password.component.css']
})
export class FieldPasswordComponent implements OnInit {
  @Input() elementId: string = '';
  @Input() formControl: FormControl = new FormControl();
  maxlength: number = 2;
  @Input() label: string = '';
  @Input() placeholder: any = null;
  @Input() explanationText: string | null = null;
  validationText: string = "השדה אינו תקין משום ש";
  patternAllow: RegExp | null = null;
  inputType: string = "text";
  isValidationIcon: boolean = false;
//  @Output() blur: EventEmitter<any> = new EventEmitter();
//  @Output() focus: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    }

  onFocus(event: any){

  }

  onBlur(event: any){
  }

  
  get value(): any {
    if (!this.formControl.value) {
      return '';
    }
    else return this.formControl.value;
  }

  set value(val) {
    this.formControl.setValue(val);
  }
}
