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
    src:'assets/img/projects/azo.jpg',
    alt:'Porjeto Azo Systems',
    title:'AZO SYSTEMS',
    width: '100px',
    height: '51px',
    description: '<p>A AZO SYSTEMS foi criada com o objetivo de melhorar a performance dos nossos clientes, convertendo desafios em soluções tecnológicas eficientes. ',
    links: [
      {
        name: 'Conheça o site',
        href: 'https://azosystems.com.br'
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
