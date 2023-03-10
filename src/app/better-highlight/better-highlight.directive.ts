import { Directive, Renderer2, OnInit, 
  ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';//essa linha permite simplificaer a achamada do host
  //se colocar o appbetterhighlight dentro do input ele passa a ser chamado diferente
  @Input('appBetterHighlight') highlightColor: string = 'blue';//essa linha permite simplificaer a achamada
  //bindando com uma propriedade, com ql elemneto do host qremos bindar
  //this.highlightColor é o valor default...tirou daqui e colocou no ngOniNIT,P Q ELE sete lá
  @HostBinding('style.backgroundColor') backgroundColor!: string;// = this.highlightColor;//essa linha permite simplificaer a achamada


  //trabalhando com a betterhighlith

  //instanciado o elemento/apontando que vai trabalhar com elemento de renderização
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }

  
  //assim que inicia, ja tem uma cor padrao
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //aplicado no hostlistener-um passo a frente em complexidade
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false,false);--n sei pq ele coloca false,false--dá erro pq em muito argumento
  }


  //para mudar a cor do background
  //reagindo a eventos  no elemento
  
  @HostListener('mouseenter')  mouseover(eventData: Event){
    // //agora agindo fora do ngOnInit,mas desperto por evento de mouse
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');//essa linha é pra qdo n tem as variaveis defaultcolor e highlighcolor
    this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave')  mouseleave(eventData: Event){
  //agora agindo fora do ngOnInit,mas desperto por evento de mouse
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.backgroundColor = this.defaultColor;
}

}
