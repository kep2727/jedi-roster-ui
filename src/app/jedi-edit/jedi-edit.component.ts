import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { JediService } from '../shared/jedi/jedi.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-jedi-edit',
  templateUrl: './jedi-edit.component.html',
  styleUrls: ['./jedi-edit.component.css']
})
export class JediEditComponent implements OnInit, OnDestroy {
  car: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jediService: JediService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.jediService.get(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
            this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          } else {
            console.log(`Jedi with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/jedi-list']);
  }

  save(form: NgForm) {
    this.jediService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.jediService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
