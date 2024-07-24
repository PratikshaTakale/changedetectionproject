import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [DataService] 
})
export class ParentComponent {
 /*  parentData: number = 0;

  updateParentData() {
    this.parentData++;
  } */

    parentData: number = 0;

  constructor(private dataService: DataService) {}

  updateParentData() {
    this.parentData++;
    this.dataService.incrementData();
  }

  getServiceData() {
    return this.dataService.getData();
  }

}
