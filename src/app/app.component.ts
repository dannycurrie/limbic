import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'limbic';

  host = 'http://localhost:8080/main.js';
  
  ngOnInit(): void {
    const script = document.createElement('script');
    script.id = 'test';
    script.crossOrigin = '';
    script.src = this.host;
    // append the app entry app element to this app's template
    script.onload = () => console.log('hello!');
    document.firstElementChild.appendChild(script);
  }
}
