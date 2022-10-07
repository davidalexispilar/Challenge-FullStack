import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-transfers',
  templateUrl: './modal-transfers.component.html',
  styleUrls: ['./modal-transfers.component.css']
})
export class ModalTransfersComponent implements OnInit {
@Input() transfers:any
@Output() transfersBool = new EventEmitter<any>()
 fiveTransfers:any
  constructor() { }

  ngOnInit(): void {
      this.fiveTransfers = this.transfers.slice(this.transfers.length-5)
      console.log(this.fiveTransfers);

  }


  exit(){
    this.transfersBool.emit(false)
  }



}
