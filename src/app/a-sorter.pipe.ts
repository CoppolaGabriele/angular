import { Pipe, PipeTransform } from '@angular/core';
import { QuestionComponent } from './question/question.component';

@Pipe({ name: 'aSorter' })
export class ASorterPipe implements PipeTransform {


  transform(value: string, placeholder?: string): string {

    var res = value.split("");
    var result;

    if (placeholder == 'asc') {
      result = res.sort();
    }
    else if (placeholder == 'desc') {
      res.sort();
      result = res.reverse();
    } /*
    else if (placeholder == 'random') {

        var currentIndex = value.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = value[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;*/
      
    return result.join("");
  }

}
