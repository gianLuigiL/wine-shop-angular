import { Pipe, PipeTransform } from '@angular/core';

/*

Capitalize the first letter of anything that's not space (usually words)

Rationale:
Encompasses everything that's not a space due to hyphens, apostrophes etc... that'd break the word bounds.
The rest of the match is untouched,

Usage:
  value | capitalizeEach
Example:
  obj.name -> isaac asimov
  {{obj.name | capitalizeEach }} -> Isaac Asimov
  
*/

@Pipe({
  name: 'capitalizeEach'
})
export class CapitalizeEachPipe implements PipeTransform {

  transform(value: string): string {
    const pattern = /\S+/gi;
    let result = value;
    result = result.replace(pattern, match => match[0].toUpperCase() + match.slice(1));
    return decodeURI( result);
  }

}
