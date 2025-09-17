import { Component } from '@angular/core';

//components
import { Header } from '../../components/header/header';
import { Knowledge } from '../../../portfolio/components/knowledge/knowledge';
import { Experiences } from '../../../portfolio/components/experiences/experiences';
import { Projects } from '../../../portfolio/components/projects/projects';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Knowledge, Experiences, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
