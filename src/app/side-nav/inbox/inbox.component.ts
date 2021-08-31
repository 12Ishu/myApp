
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  
  activeId: number = 0 ;
  inboxItems = [
    {
        id: 0,
        title: "Stock Market",
        from: "Christopher",
        date: "June 29, 2021",
        time: "13:00",
        desc: "A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms. Investment in the stock market is most often done via stockbrokerages and electronic trading platforms. Investment is usually made with an investment strategy in mind."
    },
    {
        id: 1,
        title: "Carrer Oppurtunity",
        from: "Gwen Anderson",
        date: "June 20, 2021",
        time: "11:50",
        desc: "The Job Opportunities and Basic Skills Training program (JOBS) was a welfare-to-work program created by the Family Support Act of 1988 to replace the Work Incentive program (WIN) created by the Social Security Act Amendments of 1967.[1][2] The Family Support Act put the program under titles IV-A and IV-F of the Social Security Act, and the regulations were codified at 45 CFR 250."
    }
]

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(item: object, index: number): void {
    console.log(item);     
    this.activeId = index;  
    
  }

}
