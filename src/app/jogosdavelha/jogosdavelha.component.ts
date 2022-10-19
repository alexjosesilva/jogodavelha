import { Component, OnInit } from '@angular/core';
import { JogosdavelhaService } from './shared';

@Component({
  selector: 'app-jogosdavelha',
  templateUrl: './jogosdavelha.component.html',
  styleUrls: ['./jogosdavelha.component.scss']
})
export class JogosdavelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogosdavelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  
  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }
  /**
   * retorna se o tabuleiro dever ser exibido
   */
  get showTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY)
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number{
     return this.jogoDaVelhaService.jogador;
  }

  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }

}
