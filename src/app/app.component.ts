import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import {AppService} from './app.service';
import {GraphComponent} from './graph/graph.Component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  data: any = [
    {
      "renderedtrackid": "7201",
      "trackid": "7201",
      "id": [
        10115,
        10137,
        9834,
        9863,
        9865,
        10152,
        10153,
        10154,
        10155,
        10156,
        9844,
        9845,
        9862,
        9846,
        9847,
        9824,
        9843,
        9864,
        9866,
        9870
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "1-5",
      "place": 0,
      "load": 0,
      "unload": 6,
      "retrieve": 2,
      "clear": 20
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": "",
      "trainid": "",
      "sequence": "6",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": [
        9861,
        9816,
        9867,
        9869,
        9822,
        9826,
        9827,
        9830,
        9839
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "7-8",
      "place": 0,
      "load": 0,
      "unload": 0,
      "retrieve": 4,
      "clear": 9
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": "",
      "trainid": "",
      "sequence": "9",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": [
        9819,
        9820,
        9821,
        9823,
        9835,
        9858,
        9818,
        9851,
        9868
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "10-12",
      "place": 0,
      "load": 0,
      "unload": 0,
      "retrieve": 1,
      "clear": 9
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": "",
      "trainid": "",
      "sequence": "13",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": [
        9856,
        9860,
        9849,
        9850,
        9854,
        9855,
        9857,
        9859,
        9848,
        9852,
        9853
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "14-15",
      "place": 0,
      "load": 0,
      "unload": 0,
      "retrieve": 0,
      "clear": 11
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": "",
      "trainid": "",
      "sequence": "16-38",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7201",
      "id": [
        10116,
        10133,
        10117
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "39",
      "place": 0,
      "load": 0,
      "unload": 3,
      "retrieve": 3,
      "clear": 3
    },
    {
      "total": true,
      "totalPlace": 0,
      "totalClear": 52,
      "totalLoad": 0,
      "totalUnload": 9,
      "totalRetrieve": 10
    },
    {
      "renderedtrackid": "7203",
      "trackid": "7203",
      "id": [
        10150,
        10134,
        10135,
        10136
      ],
      "trainid": "Q-CHIALT4-01",
      "sequence": "1",
      "place": 0,
      "load": 0,
      "unload": 4,
      "retrieve": 4,
      "clear": 4
    },
    {
      "renderedtrackid": "",
      "trackid": "7203",
      "id": "",
      "trainid": "",
      "sequence": "2-3",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7203",
      "id": [
        10138
      ],
      "trainid": "Q-CHIALT4-01",
      "sequence": "4",
      "place": 0,
      "load": 0,
      "unload": 1,
      "retrieve": 1,
      "clear": 1
    },
    {
      "total": true,
      "totalPlace": 0,
      "totalClear": 5,
      "totalLoad": 0,
      "totalUnload": 5,
      "totalRetrieve": 5
    },
    {
      "renderedtrackid": "7205",
      "trackid": "7205",
      "id": [
        10149
      ],
      "trainid": "null",
      "sequence": "0",
      "place": 0,
      "load": 0,
      "unload": 1,
      "retrieve": 1,
      "clear": 1
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": [
        10139,
        10140,
        10143,
        10141
      ],
      "trainid": "S-LBPALT1-01",
      "sequence": "1-2",
      "place": 0,
      "load": 0,
      "unload": 4,
      "retrieve": 4,
      "clear": 4
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": "",
      "trainid": "",
      "sequence": "3",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": [
        10145,
        10146
      ],
      "trainid": "S-LBPALT1-01",
      "sequence": "4",
      "place": 0,
      "load": 0,
      "unload": 2,
      "retrieve": 2,
      "clear": 2
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": "",
      "trainid": "",
      "sequence": "5",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": [
        10142
      ],
      "trainid": "S-LBPALT1-01",
      "sequence": "6",
      "place": 0,
      "load": 0,
      "unload": 1,
      "retrieve": 1,
      "clear": 1
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": "",
      "trainid": "",
      "sequence": "7-8",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7205",
      "id": [
        10147,
        10148
      ],
      "trainid": "S-LBPALT1-01",
      "sequence": "9-10",
      "place": 0,
      "load": 0,
      "unload": 2,
      "retrieve": 2,
      "clear": 2
    },
    {
      "total": true,
      "totalPlace": 0,
      "totalClear": 10,
      "totalLoad": 0,
      "totalUnload": 10,
      "totalRetrieve": 10
    },
    {
      "renderedtrackid": "7208",
      "trackid": "7208",
      "id": "",
      "trainid": "",
      "sequence": "1-8",
      "place": "",
      "load": "",
      "unload": "",
      "retrieve": "",
      "clear": ""
    },
    {
      "renderedtrackid": "",
      "trackid": "7208",
      "id": [
        10157
      ],
      "trainid": "Z-SBDALT9-04",
      "sequence": "9",
      "place": 0,
      "load": 0,
      "unload": 0,
      "retrieve": 0,
      "clear": 1
    },
    {
      "total": true,
      "totalPlace": 0,
      "totalClear": 1,
      "totalLoad": 0,
      "totalUnload": 0,
      "totalRetrieve": 0
    }
  ]
  rowDetail: any;
  constructor(public _http: HttpClient, public _appservice: AppService ) { }
  ngOnInit() {}
  selectedRow(row) {
    console.log('row1', row);
    this.rowDetail = row;
  }
}
