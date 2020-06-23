import {
  Component,
  ContentChild,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { DefaultViewDirective } from '../default-view.directive';
import { FallbackViewDirective } from '../fallback-view.directive';
import { from, forkJoin } from 'rxjs';
import { ErrorViewDirective } from '../error-view.directive';
import { SUSPENSE, Suspenseable } from '../types';

@Component({
  selector: 'suspense',
  template: `
    <ng-template #anchor></ng-template>
    <ng-content *ngIf="show"></ng-content>
  `,
})
export class SuspenseComponent {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;
  @ContentChild(DefaultViewDirective) defaultView: DefaultViewDirective;
  @ContentChild(FallbackViewDirective) fallbackView: FallbackViewDirective;
  @ContentChild(ErrorViewDirective) errorView: ErrorViewDirective;
  @ContentChildren(SUSPENSE as any) suspenseables: QueryList<Suspenseable>;
  // https://github.com/angular/angular/commit/97dc85ba5e4eb6cfa741908a04cfccb1459cec9b

  show = false;
  private compRef: ComponentRef<Suspenseable>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    this.anchor.createEmbeddedView(this.fallbackView.tpl);
    const isLazy = this.defaultView?.fetch;

    if (!isLazy) {
      const setup = this.suspenseables.map((comp) => comp.setup());
      forkJoin(setup).subscribe({
        next: () => {
          this.anchor.clear();
          this.show = true;
        },
        error: () => {
          this.anchor.remove();
          this.anchor.createEmbeddedView(this.errorView.tpl);
        },
      });
      return;
    }

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
