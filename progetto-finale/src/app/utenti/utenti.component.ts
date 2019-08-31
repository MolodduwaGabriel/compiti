import { Component, OnInit, Input } from '@angular/core';
import { Utenti } from '../utenti';
import { UTENTI } from '../mock-utenti';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
utenti = UTENTI;
  constructor() {

}


  ngOnInit() {
  }

}
