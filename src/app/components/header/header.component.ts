import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inlogwaarde: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  klik(loc: string) {
    console.log(loc);
  }

  inlog() {

    this.inlogwaarde = !this.inlogwaarde;
    console.log(this.inlogwaarde)
  }
}
