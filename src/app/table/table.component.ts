/**
 * Created by kshitij on 10/4/18.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/subscribeOn';
import {AppService} from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [AppService]
})
export class TableComponent implements OnInit {

  @Input() mydata;
  @Output()
  selectedRow: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _http: HttpClient, private _appservice: AppService) {}
ngOnInit() {
  /*this._appservice.getTableData().subscribe(res => {
    console.log('res', JSON.stringify(res));
  });*/

}

public rowSelected(row) {
console.log('row', row);
this.selectedRow.emit(row);
}
}
