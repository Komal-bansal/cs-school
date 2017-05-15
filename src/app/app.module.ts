import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './component/login/login.component';
import { ForgotPassword } from './component/login/forgot.password';
import { HomeComponent } from './component/home/home.component';
import { AppreciationComponent } from './component/appreciation/appreciation.component';
import { CircularComponent } from './component/circular/circular.component';
import { ComplaintComponent } from './component/complaint/complaint.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EventComponent } from './component/events/event.component';
import { HomeworkComponent } from './component/homework/homework.component';
import { MessageComponent } from './component/message/message.component';
import { PollComponent } from './component/poll/poll.component';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
import { SurveyComponent } from './component/survey/survey.component';

import { LoggedInGuard } from './component/login/login.gaurd';
import { CustomHttpService } from './providers/default.header.service';
import { CommonService } from './providers/common.service';
import { Configuration } from './providers/app.constant';
import { AuthService } from './providers/auth.service';
import { ComplaintService } from './providers/complaint.service';
import {XHRBackend, RequestOptions} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassword,
    HomeComponent,
    CircularComponent,
    ComplaintComponent,
    AppreciationComponent,
    DashboardComponent,
    EventComponent,
    HomeworkComponent,
    MessageComponent,
    PollComponent,
    SuggestionComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [LoggedInGuard,Configuration,CommonService,CustomHttpService,AuthService,ComplaintService,
  {
      provide: CustomHttpService,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new CustomHttpService(backend, defaultOptions);
      },
      deps: [XHRBackend, RequestOptions]
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
