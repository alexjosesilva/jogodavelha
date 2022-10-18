import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogosdavelhaComponent } from './jogosdavelha.component';
import { JogosdavelhaService } from './shared';


@NgModule({
  declarations: [
    JogosdavelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JogosdavelhaComponent
  ],
  providers:[
    JogosdavelhaService
  ]
})
export class JogosdavelhaModule { }
