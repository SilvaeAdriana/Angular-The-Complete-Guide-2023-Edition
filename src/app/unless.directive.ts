import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input()  set appUnless(condition: boolean){// input pq será usado sempre fora dele npé
    if(!condition){//vcref ao elemento
      this.vcRef.createEmbeddedView(this.templateRef);//templateRef-referencia ao template
    }else{//não exibe nada, vcRef é uma referencia ao elemento
      this.vcRef.clear();
    }

  }
  constructor( private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef){

  } 

}
