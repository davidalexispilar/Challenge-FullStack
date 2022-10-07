import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modal:any
  @Output() modalBoolean = new EventEmitter<any>()
    numberClient:string=""
    name:string=""
    lastName:string=""
    numberAccount:string=""
    account:string=""
  constructor() { }

  ngOnInit(): void {
    this.numberClient=this.modal.number
    this.name = this.modal.count[0].name
    this.lastName=this.modal.count[0].lastName
    this.numberAccount=this.modal.account
    this.account=this.modal.type
      console.log(this.modal);

  }

  exit(){
    this.modalBoolean.emit(false)
  }

}
