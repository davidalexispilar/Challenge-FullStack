import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  @Input() accounts: any
  @Output() accountBoolean = new EventEmitter<any>()
  amuont: string = ""
  accountOrigin: string = ""
  accountDestination: string = ""
  accountNumber: any = []
  client: string = ""
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.accounts[0].numberClient);
    for (let i = 0; i < this.accounts[0].accounts.length; i++) {

      console.log(this.accounts[0].accounts[i].numberAccount);
      this.accountNumber.push(this.accounts[0].accounts[i].numberAccount)

    }
    this.client = this.accounts[0].numberClient
    console.log(this.accounts);

  }

  exit() {
    this.accountBoolean.emit(false)
  }
  capturar() {
    console.log(this.accountOrigin);
    console.log(this.accountDestination);

  }

  postTransfers(origin: any, destination: any) {
    console.log(origin);
    console.log(destination);
    console.log(this.client);

    if (this.amuont != "" && origin != "" && destination != "") {
      if (origin != destination) {

        this.http.post(`http://localhost:3000/transfers`, { amount: this.amuont, accountOrigin: origin, accountDestination: destination, client: this.client }).subscribe((e: any) => {
          console.log(e);

          if (e) {
            alert(e.message)
            this.amuont = ""
          }


        })
      } else {
        alert("Las cuentas de destino y origen deben ser diferentes")
      }

    } else {
      alert("Debes llenar todos los campos")
    }

  }
}
