import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() name:string = ''

  constructor() {
		console.log(`Construtor ${this.name}`);
	}
	ngOnChanges(): void {
		console.log(`OnChanges log ${this.name}`);
	}
  ngOnInit(): void {
		console.log(`OnInit log ${this.name}`);
  }

}
