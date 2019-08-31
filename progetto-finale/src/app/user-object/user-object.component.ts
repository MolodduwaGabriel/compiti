import { Component, OnInit, Input } from '@angular/core';
import { OggettiUtente } from '../oggettiutente';
import { OGGETTIUTENTE } from '../mock-oggettiutente';
import { Utenti } from '../utenti';



@Component({
  selector: 'app-user-objects',
  templateUrl: './user-objects.component.html',
  styleUrls: ['./user-objects.component.css']
})
export class UserObjectsComponent implements OnInit {
  @Input() f: Utenti;
  oggettoUtente : OggettiUtente[] = OGGETTIUTENTE;
  oggettoV = [];
  j = 0;
  constructor() {

   }
  onContr(){
    for(let i=0; i<this.oggettoUtente.length; i++){
        if(this.oggettoUtente[i].proprietario == this.f.username){
            this.oggettoV[this.j] = this.oggettoUtente[i].nomeOggetto;
            console.log(this.oggettoV[i]);
            this.j++;
        }
    }
  }
 ngOnInit() {
  }

}
