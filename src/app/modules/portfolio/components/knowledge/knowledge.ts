import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../../portifolio/interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss'
})
export class Knowledge {
public arrayKnowledge = signal<IKnowledge[]>([
  {
    src: 'assets/icons/knowledge/html5.svg',
    alt: 'Icone de conhecimento de HTML5'
  },
  {
    src: 'assets/icons/knowledge/css3.svg',
    alt: 'Icone de conhecimento de CSS3'
  },
  {
    src: 'assets/icons/knowledge/javascript.svg',
    alt: 'Icone de conhecimento de JavaScript'
  },
  {
    src: 'assets/icons/knowledge/angular.svg',
    alt: 'Icone de conhecimento de Angular'
  },
  {
    src: 'assets/icons/knowledge/nodejs.svg',
    alt: 'Icone de conhecimento de NodeJs'
  },
])
}
