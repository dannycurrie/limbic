import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-frontend',
  templateUrl: './micro-frontend.component.html',
})
export class MicroFrontendComponent implements OnInit {

  @Input() host = '';
  @Input() appId = '';

  ngOnInit(): void {
    const script = document.createElement('script');
    script.id = this.appId;
    script.crossOrigin = '';
    script.src = this.host;
    script.onload = () => {
      const config = document[`${this.appId}Config`]();
      config.run('ws://localhost:9000');
    };
    document.firstElementChild.appendChild(script);
  }
}
