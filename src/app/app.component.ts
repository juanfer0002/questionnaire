import { Component } from '@angular/core';

// import { Database } from '@angular/fire/database';
import { Database, objectVal, ref } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'questionnaire';

  constructor(db: Database) {
    
    const objectRef = ref(db, '/users/my_uniq_id');
    objectVal(objectRef).subscribe(result => {
      console.log('Que carajos tengo aqui???', result)
    })

  }
}
