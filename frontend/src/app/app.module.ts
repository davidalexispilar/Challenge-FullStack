import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TransfersComponent } from './transfers/transfers.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalTransfersComponent } from './modal-transfers/modal-transfers.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    LoginComponent,
    TransfersComponent,
    ModalComponent,
    ModalTransfersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
