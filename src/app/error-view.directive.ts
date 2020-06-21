import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[errorView]',
})
export class ErrorViewDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
