import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.css']
})
export class DelhiComponent implements OnInit {
  isAvailable=false;
  changeEv()
  {
     this.isAvailable=!this.isAvailable;
  }
 

  Delhi=[];
    getdata1()
    {
      this.Delhi=
      [
        
        
        {
          id:1,name:'Maharashtra',
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHhEDWZ29DQsXFAkZQjb4mL2FgTr7v8LkzQ&usqp=CAU',
          link:'https://www.firstpost.com/tag/maharashtra-politics'
        }
      ];
    } 
      getdata2()
      {
        this.Delhi=
        [
          {id:1,name:'Delhi',img:'https://aniportalimages.s3.amazonaws.com/media/details/GOI-octsg27_ff4upaa.jpg',
            link:'https://economictimes.indiatimes.com/topic/Government-Of-India'},
          
        ];
      }


  constructor() { 
    this.getdata2();
  }

  ngOnInit(): void {
  }

}
