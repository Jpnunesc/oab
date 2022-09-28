import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LoadingService } from './components/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  subscription: Subscription[] = [];
  isloading: boolean = false;
  constructor(public loader: LoadingService, private changeDedectionRef: ChangeDetectorRef) {}

  ngOnInit() {
     this.subscription.push(this.loader.changes().subscribe((data) => {
         this.isloading = data.value;
     }));
  }
  ngAfterContentChecked(): void {
    this.changeDedectionRef.detectChanges();
}

ngOnDestroy() {
  this.subscription[0].unsubscribe();
}
}
