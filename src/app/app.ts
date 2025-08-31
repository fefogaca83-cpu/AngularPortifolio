import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Experiences } from './modules/portfolio/components/experiences/experiences';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,],
  template: `<router-outlet />`,
})
export class App {
  
}
