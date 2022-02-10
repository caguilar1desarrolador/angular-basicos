import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado : string = '' ;

  borrarHeroe(){
    const heroeCandidato = this.heroes.pop();
    
    if (heroeCandidato != undefined){
        console.log(heroeCandidato);
        this.heroeBorrado = heroeCandidato;
    }
  }
}
