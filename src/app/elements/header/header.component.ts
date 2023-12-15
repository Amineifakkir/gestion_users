import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languageOptions = ['en', 'fr'];
  selectedLanguage = 'EN';

  

  constructor(private translate: TranslateService,config: NgbDropdownConfig) {
    translate.setDefaultLang(this.selectedLanguage);
    translate.use('en');
    config.placement = 'bottom-right';
  }

  useLanguage(): void {
    this.translate.use(this.selectedLanguage);
    console.log(this.selectedLanguage);
    
}

  ngOnInit(): void {
  }

  title = _('demo.title');

}
