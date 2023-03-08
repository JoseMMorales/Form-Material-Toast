import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  exports: [Material],
  imports: [Material],
})
export class MaterialModule {}
