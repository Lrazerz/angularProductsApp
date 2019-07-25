import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatRadioModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';


import {MatListModule} from '@angular/material/list';

@NgModule({
    exports: [ MatButtonModule, MatCheckboxModule,
            MatToolbarModule, MatTableModule, MatSortModule,
            MatFormFieldModule, MatInputModule, MatListModule,
            MatCardModule, MatRadioModule ]
  })
  export class AppMaterialModule {}