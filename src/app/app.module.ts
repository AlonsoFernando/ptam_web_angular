import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuhComponent } from './menuh/menuh.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AbntComponent } from './menuh/info/abnt/abnt.component';
import { AboutComponent } from './menuh/info/about/about.component';
import { AbrevComponent } from './menuh/info/abrev/abrev.component';
import { ContactComponent } from './menuh/info/contact/contact.component';
import { StartComponent } from './menuh/start/start.component';
import { TablesComponent } from './menuh/info/tables/tables.component';
import { RequesterComponent } from './menuh/requester/requester.component';
import { GoalComponent } from './menuh/goal/goal.component';
import { PropertyComponent } from './menuh/property/property.component';
import { InspectionComponent } from './menuh/inspection/inspection.component';
import { DescriptionComponent } from './menuh/description/description.component';
import { RecordPhotoComponent } from './menuh/record-photo/record-photo.component';
import { RegionalFeaturesComponent } from './menuh/regional-features/regional-features.component';
import { ConfrontationsComponent } from './menuh/confrontations/confrontations.component';
import { AerialViewComponent } from './menuh/aerial-view/aerial-view.component';
import { MethodologyComponent } from './menuh/methodology/methodology.component';
import { ReferentialPropertiesComponent } from './menuh/referential-properties/referential-properties.component';
import { AdaptationsComponent } from './menuh/adaptations/adaptations.component';
import { GraphicsComponent } from './menuh/graphics/graphics.component';
import { NoteComponent } from './menuh/note/note.component';
import { ConclusionComponent } from './menuh/conclusion/conclusion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuhComponent,
    HeaderComponent,
    FooterComponent,
    AbntComponent,
    AboutComponent,
    AbrevComponent,
    ContactComponent,
    StartComponent,
    TablesComponent,
    RequesterComponent,
    GoalComponent,
    PropertyComponent,
    InspectionComponent,
    DescriptionComponent,
    RecordPhotoComponent,
    RegionalFeaturesComponent,
    ConfrontationsComponent,
    AerialViewComponent,
    MethodologyComponent,
    ReferentialPropertiesComponent,
    AdaptationsComponent,
    GraphicsComponent,
    NoteComponent,
    ConclusionComponent,
    BodyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
