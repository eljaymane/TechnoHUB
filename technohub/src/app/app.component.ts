import { Component,NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [ 
      RouterModule
  ]
})
export class AppComponent {
  title = 'Technohub';
}
