import { Component, Input, SimpleChanges, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  animations: [
    trigger('slider', [
      // Side : left
      state('left', style(
        {
          transform: 'translateX(0)'
        }
      )),
      // Side : right
      state('right', style(
        {
          transform: 'translateX(0)'
        }
      )),
      // Side : top
      state('top', style(
        {
          transform: 'translateY(0)'
        }
      )),
      state('bottom', style(
        {
          transform: 'translateY(0)'
        }
      )),
      // Left abrir
      transition('void => left', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      // Left fechar      
      transition('left => void', [
        animate(100, style({transform: 'translateX(-100%)'}))
      ]),
      // Right abrir
      transition('void => right', [
        style({transform: 'translateX(100%)'}),
        animate(300)
      ]),
      // Right fechar      
      transition('right => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ]),
      // Top abrir
      transition('void => top', [
        style({transform: 'translateY(-100%)'}),
        animate(300)
      ]),
      // Top fechar
      transition('top => void', [
        animate(100, style({transform: 'translateY(-100%)'}))
      ]),
      // Bottom abrir
      transition('void => bottom', [
        style({transform: 'translateY(100%)'}),
        animate(300)
      ]),
      // Bottom fechar
      transition('bottom => void', [
        animate(100, style({transform: 'translateY(100%)'}))
      ]),
    ])
  ],
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // Define se o Sidenav está aberto ou fechado
  @Input('opened') opened: Boolean = false;

  // Lado em que o SideNav aparece
  @Input('side') side: String = 'right';

  // Largura do SideNav
  @Input('size') size: String = '30%';

  // Fechar ao clicar fora do SideNav
  @Input('autoClose') autoClose: Boolean = true;

  // Backdrop em volta do SideNav
  @Input('backdrop') backdrop: Boolean = false;

  // Botão de 'fechar' no SideNav
  @Input('showCloseButton') showCloseButton: Boolean = true;

  // Título do Sidenav
  @Input('navTitle') navTitle: String = 'Título Sidenav';

  // Atribui status ao SideNav
  @Input('titleType') titleType: String = 'default';

  // Variável que ajuda na manipulação do Sidenav
  aux: number = 0;

  // Animação Sidenav
  @Input('state') state: String = 'right';

  // Evento acionado quando a sidenav é aberta
  @Output() sidenavOpened: EventEmitter<any> = new EventEmitter<any>();

  // Evento acionado quando a sidenav é fechada
  @Output() sidenavClosed: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  async toggleState() {
    this.state = this.side;
  }

  async getClasses() {
    let side, open, type = '';
    // Verifica se é válido o lado e adiciona em uma variável
    if (
      this.side === 'right' ||
      this.side === 'left' ||
      this.side === 'top' ||
      this.side === 'bottom'
    ) {
      side = 'sidenav-' + this.side;
    } else {
      return console.error('O atributo side está incorreto');
    }
    // Adiciona a classe opened a uma variável caso ele esteja fechado
    if (this.opened) {
      open = 'opened';
    } else {
      open = '';
    }
    // Adiciona em uma variável o titleType
    if (
      this.titleType === 'success' ||
      this.titleType === 'error'   ||
      this.titleType === 'warning' ||
      this.titleType === 'default'
    ) {
      type = 'data-status-title-type-' + this.titleType;
    }
    // Retorna uma string com as classes a serem inseridas
    return '' + side + ' ' + open + ' ' + type;
  }

  async getStyles() {
    // Verifica a posição do sidenav e define se ele receberá uma altura ou largura no Style
    if (this.side === 'top' || this.side === 'bottom') {
      return { height: '' + this.size };
    } else if (this.side === 'right' || this.side === 'left') {
      return { width: '' + this.size };
    } else {
      return console.error(
        'Variáveis "size" ou "side" com entradas incorretas'
      );
    }
  }

  // Abre e fecha o Sidenav
  async openSidenav() {
    this.toggleState();    
    this.opened = true;
    this.aux = 0;
    this.sidenavOpened.emit(this);
  }

  // Fecha o Sidenav
  async closeSidenav() {
    if (this.opened) {
      this.opened = !this.opened;
      this.toggleState();
      this.sidenavClosed.emit(this);
    }
  }

  // Função chamada quando clicamos fora do Sidenav
  // Nela é verificado se o autoclose é true, caso seja, ele chama a função de fechar o sidenav
  async closeOutsideSidenav() {
    if (this.autoClose && this.aux >= 1) {
      this.closeSidenav();
    }
    this.aux++;
  }

}
