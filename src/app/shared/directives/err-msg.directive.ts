import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges {

  htmlElement     : ElementRef<HTMLElement>;
  private _color  : string = 'green';
  private _mensaje: string = 'Este campo es requerido';

  @Input() set color( valor: string ) {
    this.setColor();
    this._color = valor;
  }

  @Input() set mensaje( valor: string ) {
    this.setMensaje();
    this._mensaje = valor; 
  }

  @Input() set valido( valor: boolean ) {
    ( valor ) ? this.htmlElement.nativeElement.classList.add('hidden')
              : this.htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    console.log('constructor directive');
    console.log(el); 
    
    this.htmlElement = el;
  }

  /* Cambiando valores de manera dinámica */
  ngOnChanges(changes: SimpleChanges): void {
    // if( changes.mensaje ) {
    //   const mensaje = changes.mensaje.currentValue;

    //   this.htmlElement.nativeElement.innerText = mensaje;  
    // }
    
    // if( changes.color ){
    //   const color = changes.color.currentValue;

    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log(this.color); undefined
    // console.log(this.mensaje); undefined

    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
