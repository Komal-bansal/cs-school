import {Component, AfterViewInit} from '@angular/core';
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
import { AuthService } from './providers/auth.service';
import { LoggedInGuard } from './component/login/login.gaurd';
declare let $;
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  public pages = [
<<<<<<< HEAD
      { title: 'Home', component: HomeComponent, icon: 'assets/icon/home.png', url: 'home' },
      { title: 'Dashboard', component: DashboardComponent, icon: 'assets/icon/home.png', url: 'dashboard' },
      { title: 'Complaints', component: ComplaintComponent, icon: 'assets/icon/complaint.png', url: 'complaint' },
      { title: 'Suggestions', component: SuggestionComponent, icon: 'assets/icon/suggestion.png', url: 'suggestion/for-me' },
      { title: 'Appreciations', component: AppreciationComponent, icon: 'assets/icon/appreciation.png', url: 'appreciation' },
      { title: 'Messaging', component: MessageComponent, icon: 'assets/icon/message.png', url: 'conversation' },
      { title: 'Events', component: EventComponent, icon: 'assets/icon/event.png', url: 'planner' },
      { title: 'Poll', component: PollComponent, icon: 'assets/icon/poll.png', url: 'poll' },
      { title: 'Survey', component: SurveyComponent, icon: 'assets/icon/survey.png', url: 'survey' },
      { title: 'Circular', component: CircularComponent , icon: 'assets/icon/homework.png', url: 'circular'},
      { title: 'Homework', component: HomeworkComponent, icon: 'assets/icon/circular.png', url: 'homework' }
=======
      { title: 'Home', component: HomeComponent, icon: 'icons/home.png', url: 'home' },
      { title: 'Dashboard', component: DashboardComponent, icon: 'icons/dashboard.png', url: 'dashboard' },
      { title: 'Complaints', component: ComplaintComponent, icon: 'icons/complaint.png', url: 'complaint' },
      { title: 'Suggestions', component: SuggestionComponent, icon: 'icons/suggestion.png', url: 'suggestion' },
      { title: 'Appreciations', component: AppreciationComponent, icon: 'icons/appreciation.png', url: 'appreciation' },
      { title: 'Messaging', component: MessageComponent, icon: 'icons/message.png', url: 'conversation' },
      { title: 'Events', component: EventComponent, icon: 'icons/event.png', url: 'planner' },
      { title: 'Poll', component: PollComponent, icon: 'icons/poll.png', url: 'poll' },
      { title: 'Survey', component: SurveyComponent, icon: 'icons/survey.png', url: 'survey' },
      { title: 'Circular', component: CircularComponent , icon: 'icons/homework.png', url: 'circular'},
      { title: 'Homework', component: HomeworkComponent, icon: 'icons/circular.png', url: 'homework' }
>>>>>>> 30fe6fdf3310579f4ccdbbaa708eef52de607b06
    ];
  constructor(public auth:AuthService, public log:LoggedInGuard){
    
  }
  ngAfterViewInit(){
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  }
  logout(){
    localStorage.clear();
  }
}
