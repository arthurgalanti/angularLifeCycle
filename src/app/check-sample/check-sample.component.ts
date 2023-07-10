import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
						DoCheck,
						AfterContentInit,
						AfterContentChecked,
						AfterViewInit,
						AfterViewChecked,
						OnDestroy
{

	quantity: number = 0

  constructor() { }

	increment(){
		this.quantity += 1
	}

	decrement(){
		this.quantity -= 1
	}

	ngOnInit(): void {
		console.log("ngOnInit")
  }

	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	ngOnDestroy(): void {
		console.log("the component was destroyed")
	}

}
