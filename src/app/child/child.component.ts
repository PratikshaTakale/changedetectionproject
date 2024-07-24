import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 /*  @Input() childData: number = 0;
  localChildData: number = 0;

  updateChildData() {
    this.localChildData++;
  } */

    @Input() childData: number = 0;
    localChildData: number = 0;
  
    constructor(private dataService: DataService) {}
  
    updateChildData() {
      this.localChildData++;
      this.dataService.incrementData();
    }
  
    getServiceData() {
      return this.dataService.getData();
    }

}
