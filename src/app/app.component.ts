import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'limbic';

  host = '';
  appId = '';

  ngOnInit(): void {
    const script = document.createElement('script');
    script.id = this.appId;
    script.crossOrigin = '';
    script.src = this.host;
    script.onload = () => {
      const config = document[`${this.appId}Config`]();
      const appRoot = document.createElement('div');
      document.querySelector('.content').append(appRoot);
      appRoot.id = config.rootElementId;
      config.setup({ webSocket: 'hello' });
      config.run();
    };
    document.firstElementChild.appendChild(script);
  }
}
