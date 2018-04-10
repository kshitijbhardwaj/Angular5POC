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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [AppService]
})
export class DetailsComponent implements OnInit {
  @Input() myRowDetail;
  constructor(private _http: HttpClient, private _appservice: AppService) {}
  ngOnInit() {}
  }
