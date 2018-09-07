import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeEachPipe } from '../../pipes/capitalize-each.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CapitalizeEachPipe],
  exports: [CapitalizeEachPipe]
})
export class PipesModule { }
