import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maharashrta',
  templateUrl: './maharashrta.component.html',
  styleUrls: ['./maharashrta.component.css']
})
export class MaharashrtaComponent implements OnInit {

  isAvailable=false;
  changeEv()
  {
     this.isAvailable=!this.isAvailable;
  }
 

  Maha=[];
    getdata1()
    {
      this.Maha=
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
        this.Maha=
        [
          {id:1,name:'Spot',img:'https://www.sticksports.com/wp-content/uploads/2017/11/SCSL_IPL2018_AppIcon_option5-2.png',
            link:'https://sports.ndtv.com/'},
          {id:2,name:'Spot',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sw1aV72l97-53cKGPjEoJpwBcpgRnsRFzw&usqp=CAU',
          link:'https://sports.ndtv.com/'}

        ];
      }


  constructor() { 
    this.getdata1();
  }

  ngOnInit(): void {
  }

}
