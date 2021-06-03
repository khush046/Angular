import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  
  
  Ent=[];
    getdata1()
    {
      this.Ent=
      [
        
        {id:1,name:'Entertainment',img:'https://static8.depositphotos.com/1052036/857/v/600/depositphotos_8570412-stock-illustration-entertainmaent-folder.jpg',
          link:'https://www.hindustantimes.com/entertainment'},
        {id:2,name:'Entertainment',img:'https://static8.depositphotos.com/1052036/799/v/950/depositphotos_7991018-stock-illustration-bucket-full-of-entertainment.jpg',
          link:'https://www.hindustantimes.com/entertainment'}
      ];
    } 
      getdata2()
      {
        this.Ent=
        [
          {id:1,name:'Spot',img:'https://www.sticksports.com/wp-content/uploads/2017/11/SCSL_IPL2018_AppIcon_option5-2.png',
            link:'https://sports.ndtv.com/'},
          {id:2,name:'Spot',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sw1aV72l97-53cKGPjEoJpwBcpgRnsRFzw&usqp=CAU',
          link:'https://sports.ndtv.com/'}

        ];
      }


  constructor() {
    this.getdata2();
   }

  ngOnInit(): void {
  }

}
