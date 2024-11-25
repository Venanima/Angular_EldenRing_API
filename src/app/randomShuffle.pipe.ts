import {Pipe, PipeTransform} from '@angular/core';

@Pipe({standalone: true, name: 'randomShuffle'})
export class RandomShufflePipe implements PipeTransform {
  transform(list: any[]): any[] {
    const newList = [...list];
    newList.sort(() => Math.random() - 0.5);
    return newList;
  }
}
