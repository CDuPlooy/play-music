import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-debug-component',
  templateUrl: './debug-component.component.html',
  styleUrls: ['./debug-component.component.css']
})
export class DebugComponent implements OnInit {

  constructor(private demo: DemoService, private router: Router) { }

  ngOnInit() {
    this.demo.unlock();
    this.router.navigate(['/']);
  }

}
