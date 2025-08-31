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
        strong: 'Estágio',
        p: 'AZO Systems | 2025 - Present',
      },
      text: '<p>Atualmente, realizo meu estágio em Desenvolvimento de Software na Azo Systems, onde participo de projetos reais da empresa.<p>Minhas atividades incluem apoiar o desenvolvimento de aplicações, contribuir na implementação de novas funcionalidades, acompanhar boas práticas de programação e trabalhar com metodologias ágeis em equipe. Essa experiência tem sido fundamental para aprimorar minhas habilidades técnicas e compreender o ciclo de desenvolvimento em um ambiente corporativo.<P>',
    },
  ]);
}
