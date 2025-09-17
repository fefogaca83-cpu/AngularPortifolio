import { Component, signal } from '@angular/core';

//interface
import { Ixperiences } from '../../../portifolio/interface/Ixperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<Ixperiences[]>([
    {
      summary: {
        strong: 'Objetivo',
        p: '',
      },
      text: '<p>Desenvolvedor Júnior com conhecimentos em JavaScript, TypeScript e Angular, buscando oportunidade para iniciar minha carreira em desenvolvimento web com foco no crescimento profissional contínuo e na evolução para me tornar um desenvolvedor Full Stack.<P>',
    },
  ]);
}
