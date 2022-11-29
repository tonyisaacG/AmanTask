import { Pipe, PipeTransform } from '@angular/core';
import { Geneder } from '../Models/employee-model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Geneder):unknown {
      switch(value)
      {
        case Geneder.Male:
          return "Male";
        case Geneder.Femmale:
          return "Femmale";
      }
    }
}
