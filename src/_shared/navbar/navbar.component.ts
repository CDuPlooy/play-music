import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../_services';
import {Router} from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private demo: DemoService, private router: Router) { }

  ngOnInit() {
  }

    public toggle() {
            $('#wrapper').toggleClass('toggled');
    }

    public reset() {
      this.demo.unlock();
      console.log('Resetted demo');
      this.router.navigate(['#']);
    }

}
