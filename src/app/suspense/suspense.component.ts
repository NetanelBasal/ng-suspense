import {
  Component,
  ContentChild,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
} from '@angular/core';
import { DefaultViewDirective } from '../default-view.directive';
import { FallbackViewDirective } from '../fallback-view.directive';
import { from, ObservableInput } from 'rxjs';
import { ErrorViewDirective } from '../error-view.directive';

export interface Suspenseable {
  setup(): ObservableInput<any>;
}

@Component({
  selector: 'suspense',
  template: ` <ng-template #anchor></ng-template> `,
})
export class SuspenseComponent {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;
  @ContentChild(DefaultViewDirective) defaultView: DefaultViewDirective;
  @ContentChild(FallbackViewDirective) fallbackView: FallbackViewDirective;
  @ContentChild(ErrorViewDirective) errorView: ErrorViewDirective;

  private compRef: ComponentRef<Suspenseable>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    this.anchor.createEmbeddedView(this.fallbackView.tpl);

    this.defaultView.fetch().then((comp) => {
      const factory = this.resolver.resolveComponentFactory(comp.default);
      this.compRef = factory.create(this.injector);

      from(this.compRef.instance.setup()).subscribe({
        next: () => {
          this.anchor.remove();
          this.anchor.insert(this.compRef.hostView);
        },
        error: () => {
          this.anchor.remove();
          this.anchor.createEmbeddedView(this.errorView.tpl);
        },
      });
    });
  }

  ngOnDestroy() {
    this.compRef?.destroy();
    this.compRef = null;
  }
}
