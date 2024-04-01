import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {} from '@fortawesome/fontawesome-svg-core';
import {
  faBook,
  faSearch,
  faMicrophone,
  faPlay,
  faLink,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { ThemeService } from './theme.service';

@Pipe({
  name: 'removeduplicates',
})
export class RemovePipe implements PipeTransform {
  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'name');
    }
    return value;
  }
}

@Component({
  selector: 'app-dictionary-web',
  templateUrl: './dictionary-web.component.html',
  styleUrls: ['./dictionary-web.component.css'],
})
export class DictionaryWebComponent implements OnInit {
  public dict: any;
  public Data: any;

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,private themeService: ThemeService
  ) {}
  theme: boolean = false;

  ngOnInit(): void {
    this.dict = this.formBuilder.group({ location: [''] });
  }
  icons = { faBook, faSearch, faMicrophone, faPlay, faLink, faSun, faMoon };

  search() {}
 

  sendToAPIXU(formValues: any) {
    this.apixuService.getvalues(formValues.location).subscribe((data:any) => {
      this.Data = data;
      console.log('dictData', this.Data);
    });
  }
  start() {
    if (!this.theme) {
      this.theme = true;
    } else if (this.theme) {
      this.theme = false;
    }
  }
  stop() {}
}
