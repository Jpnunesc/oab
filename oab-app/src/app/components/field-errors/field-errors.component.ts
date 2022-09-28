import { Component, Host, SkipSelf, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent {

static readonly errorMessages: any = {
    'required': () => 'Campo obrigatório',
    'minlength': (params: any) => 'The minimum number of characters is' + params.requiredLength,
    'maxlength': (params: any) => 'The maximum allowed number of characters is ' + params.requiredLength,
    'pattern': () => 'Campo obrigatório',
    'min': (params: any) => 'The minimum value is' + params?.min.toString().replace('.',','),
    'email': (params: { requiredLength: string; }) => 'Email inválido'
  };

  @Input()
  control: AbstractControlDirective | AbstractControl | any;

  @Input()
   emailError = false;

   @Input()
   cpfError = false;

  constructor(
    @Host() @SkipSelf() private form: FormGroupDirective,
  ) {   }

  shouldShowErrors(): boolean {

    return (this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched || this.form.submitted)) || (this.cpfError || this.emailError);
  }

  listOfErrors(): string[] {
    if(this.emailError) { 
      return ['Email inválido'];
    } else if(this.cpfError){
      return ['Cpf inválido'];
    }
    else {
      return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
    }
  }
  getMessage(type: string, params: string) {
       return FieldErrorsComponent.errorMessages[type](params);
  }
}
