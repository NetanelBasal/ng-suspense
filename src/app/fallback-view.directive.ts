import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fallbackView]',
})
export class FallbackViewDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
