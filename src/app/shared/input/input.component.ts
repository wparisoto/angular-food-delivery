import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any
  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa se usado com uma diretiva ngModel ou FormControlName')
    }
  }

hasSuccess(): boolean{
  return this.input.valid && (this.input.dirty || this.input.touched)
}

hasError(): boolean{
  return !this.input.valid && (this.input.dirty || this.input.touched)
}

}
