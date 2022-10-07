import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() accountSon = new EventEmitter<any>()
  numberAccounts: string = ""
  account: string = ""
  muont: string = ""
  accountOrigin: string = ""
  accountDestination: string = ""
  accounts: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAccounts(number: string) {
    if (number != "") {

      this.http.get(`http://localhost:3000/accountsLogin?number=${number}`).subscribe((e) => {
        console.log(e);

        this.accounts ={
          counts:e ,
          numberclient:number
        }
        console.log(this.accounts);

        if (this.accounts) {

          this.accountSon.emit(this.accounts)
        }
      })

    }else{
      alert("Por favor ingrese el numero de cliente")
    }
    }
  }


