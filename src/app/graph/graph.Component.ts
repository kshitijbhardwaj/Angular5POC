/**
 * Created by kshitij on 10/4/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import {selector} from 'rxjs/operator/publish';
import {AppService} from '../app.service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  providers: [AppService]
})

export class GraphComponent implements OnInit {
  graph: any = [];
  min_temp;
  max_temp;
  dt;
  weatherDates: any = [];
  wind_speed;
  wind_deg;
  graphType1: string = 'bar';
  graphType2: string = 'line';
  constructor(public _http: HttpClient, public _appservice: AppService ) { }
  ngOnInit() {
    this._appservice.getDetails().subscribe(res => {
      console.log('res', JSON.stringify(res));
      this.min_temp = res['list'].map(res1 => res1.main.temp_min);
      console.log('min_temp', this.min_temp);
      this.max_temp = res['list'].map(res1 => res1.main.temp_max);
      this.dt = res['list'].map(res1 => res1.dt);
      this.dt.forEach(d => {
        let jsdate = new Date(d * 1000);
        this.weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
      });
      this.wind_speed = res['list'].map(res1 => res1.wind.speed);
      this.wind_deg = res['list'].map(function(res1) { return res1.wind.deg; });
      console.log('wind_deg', this.wind_deg);
      console.log('weatherDates', this.weatherDates);
      this.plottingGraphs();
    });
  }

  public plottingGraphs() {
    this.graph = new Chart('graphs-left', {
      type: this.graphType1,
      data: {
        labels: this.weatherDates,
        datasets: [{
          type: this.graphType1,
          label: 'Maximum Temperature',
          data: this.max_temp,
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }, {
          type: this.graphType2,
          label: 'Minimum Temperature',
          data: this.min_temp,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(2, 2, 2, 1)',
            'rgba(2, 2, 2, 1)',
            'rgba(2, 2, 2, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: true
          }]
        }
      }
    });
    this.graph = new Chart('graphs-right', {
      type: this.graphType1,
      data: {
        labels: this.wind_deg,
        datasets: [{
          type: this.graphType1,
          label: 'Wind Speed',
          data: this.wind_speed,
          backgroundColor: [
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            display: true
          }]
        }
      }
    });
  }

  public toggleGraph() {
    ((this.graphType1 === 'bar') ? this.graphType1 = 'line' : this.graphType1 = 'bar');
    ((this.graphType2 === 'line') ? this.graphType2 = 'bar' : this.graphType2 = 'line');
    this.plottingGraphs();
  }
}
