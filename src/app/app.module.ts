import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { SearchComponent } from './search/search.component';
import { MetricsComponent } from './metrics/metrics.component';
import { CompanyPage } from './company-page/company-page.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ProfilePageComponent } from './profile/profile-page.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LoginPageComponent } from './auth/login-page.component';
import { CompareModalComponent } from './modals/compare-modal.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ComparePageComponent } from './compare/compare-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CompanyPage,
    SearchComponent,
    MetricsComponent,
    CompareModalComponent,
    ComparePageComponent,
    LineChartComponent,
    ProfilePageComponent,
    FooterComponent,
    DashboardComponent,
    FavouritesComponent,
    LoginPageComponent,
    CompanyCardComponent,
    SpinnerComponent,
    ContentAnimateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
