import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  constructor() { }
  ngForFiveVariables = [
    {
      variableName: 'index',
      datatype: '整數',
      meaning: '代表目前資料在陣列中的index'
    },
    {
      variableName: 'first',
      datatype: '布林值',
      meaning: '代表目前資料是否為第一筆'
    },
    {
      variableName: 'last',
      datatype: '布林值',
      meaning: '代表目前資料是否為最後一筆'
    },
    {
      variableName: 'even',
      datatype: '布林值',
      meaning: '代表目前資料的index是否為第偶數筆'
    },
    {
      variableName: 'odd',
      datatype: '布林值',
      meaning: '代表目前資料的index是否為第奇數筆'
    }
  ];
  todolists = [
    {
      location: '抹茶山',
      day: '2021/02/28',
      do: '爬山'
    }, {
      location: '見晴步道',
      day: '2021/02/27',
      do: '健行'
    }, {
      location: '實驗室',
      day: '2021/03/01',
      do: '耍廢'
    }
  ];
  title = 'TODOLISTS';
  ngOnInit(): void {
  }

}
