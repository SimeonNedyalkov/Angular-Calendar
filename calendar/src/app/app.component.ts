import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarAppComponent } from "./calendar-app/calendar-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar';
}
