import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    // this.getAccounts("1")
  }
  numberAccounts: string = ""
  account: string = ""
  accountsLogin: any = []
  boolean: boolean = false
  accounts: any
  transfer: boolean = false
  allAccounts: any = []
  options: any
  modal: any
  modalBoolean: boolean = false
  client: string = ""
  transfersClient: any = []
  clientBoolean:boolean=false
  getAccountsSon(e: any) {
    this.allAccounts = []
    this.options = e.counts
    this.accounts = e.numberclient
    for (let i = 0; i < 5; i++) {
      this.accountsLogin.push(e.counts[0].accounts[i])
    }

    this.boolean = !this.boolean
    this.allAccounts.push(e.counts[0])
  }
  moreOptions(account: any) {
    this.accountsLogin = []
    for (let index = 0; index < account[0].accounts.length; index++) {
      this.accountsLogin.push(account[0].accounts[index])


    }
  }
  transfers() {
    this.transfer = !this.transfer
  }

  exit() {
    this.accountsLogin = []
    this.boolean = !this.boolean
  }
  cancel(e: any) {
    this.transfer = e
  }
  exitModal(e: any) {
    this.modalBoolean = e
  }
  exitTransfer(e:any){
    this.clientBoolean =!this.clientBoolean
  }
  showTransfers() {
    this.http.get(`http://localhost:3000/transfer?number=${this.accounts}`).subscribe((e: any) => {
      if (e.status === 200) {
        this.transfersClient = e.data
        console.log(this.transfersClient);
        this.clientBoolean= !this.clientBoolean

      } else {
        alert(e.message)
      }

    })

  }


  getAccountClient(number: string, account: string, type: string) {
    this.numberAccounts = number
    this.account = account
    this.http.get(`http://localhost:3000/account?number=${this.numberAccounts}&account=${this.account}`).subscribe((e) => {
      this.modal = {
        count: e,
        number: number,
        account: this.account,
        type: type
      }

      this.modalBoolean = true
    })
  }


}
