import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qa-practicies';
  contador:number=0;
  public incrementar (): void{
    this.contador=this.contador+1;
    //this.contador++;
    
  }
}

