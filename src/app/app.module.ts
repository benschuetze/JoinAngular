import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoneModalComponent } from './done-modal/done-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    BoardComponent,
    EditTaskComponent,
    HeaderComponent,
    DoneModalComponent
  ],
  imports: [
    MatToolbarModule,
    MatDialogModule,
    DragDropModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    MatDatepickerModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
