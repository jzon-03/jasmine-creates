import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl',
    standalone: false
})
export class SafeUrlPipe implements PipeTransform {

  constructor(
    private _sanitizer: DomSanitizer
  ){}

  transform(value: string): unknown {

    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
