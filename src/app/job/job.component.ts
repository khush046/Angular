import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  Job=[];
    getdata1()
    {
      this.Job=
      [
        
        {
          id:1,name:'Job',
          img:'https://lokjagruti.com/wp-content/uploads/2020/05/sarkari-naukri_1573705542.jpeg',
          link:'https://www.fresherslive.com/employment-news'
        }
        
      ];
    } 
      getdata2()
      {
        this.Job=
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
