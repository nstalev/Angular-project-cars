import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'Location';
  lat: number = 42.198041;
  lng: number = 24.735649;
  constructor() { }

  ngOnInit() {
  }

}
