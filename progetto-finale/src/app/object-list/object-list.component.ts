import { Component, OnInit } from '@angular/core';
import { Oggetti } from '../oggetti';
import { OGGETTI } from '../mock-object';
import { OggettiUtente } from '../oggettiutente';
import { OGGETTIUTENTE } from '../mock-oggettiutente';
import { OggettiSito } from '../oggettiSito';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {
  oggetto : Oggetti[] = OGGETTI;
  oggettoUtente : OggettiUtente[] = OGGETTIUTENTE;

  constructor() { }


  ngOnInit() {
  }

}
