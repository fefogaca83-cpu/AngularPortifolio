import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../../portifolio/interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  #dialog = inject(MatDialog)
public arrayProjects = signal<IProjects[]>([
  {
    src:'assets/img/projects/lista-de-tarefas.png',
    alt:'Porjeto to-do list',
    title:'TO-DO LIST',
    width: '100px',
    height: '51px',
    description: '<p>Um projeto desenvolvido para treinar e aplicar conceitos de JavaScript, HTML e CSS. A aplicação permite ao usuário adicionar, marcar como concluídas e remover tarefas de forma prática, mantendo o foco na organização do dia a dia.',
    links: [
      {
        name: 'Conheça',
        href: 'http://todolists00.netlify.app'
      }
    ]
  },
  {
    src:'assets/img/projects/pngegg.png',
    alt:'Mario-jump',
    title:'MARIO JUMP',
    width: '100px',
    height: '70px',
    description: '<p>Uma mistura de dois clássico, Mario e dinossauro do Google Chrome, desenvolvido com HTML, CSS e JavaScript.',
    links: [
      {
        name: 'Conheça',
        href: 'http://jogomariojumpmj.netlify.app'
      }
    ]
  },
  {
    src:'assets/img/projects/pokemon.png',
    alt:'Pokédex',
  title:'POKÉDEX',
    width: '100px',
    height: '70px',
    description: '<p>Desenvolvi uma aplicação web em Angular que consome a PokéAPI para exibir informações dos Pokémon, incluindo pesquisa por nome ou ID e uma interface intuitiva.',
    links: [
      {
        name: 'Conheça',
        href: 'https://projetopokedexfelipe.netlify.app'
        
      }
    ]
  }
]);

public opemDialog(data: IProjects){
  this.#dialog.open(DialogProjects,{
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
}
}
