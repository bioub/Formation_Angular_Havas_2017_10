import { Component, OnInit } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ab-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), { optional: true }),
        group([
          query(':enter', [
            style({opacity: 0}),
            animate('2s ease-in-out', style({ opacity: 1 }))
          ], { optional: true }),
          query(':leave', [
            style({opacity: 1}),
            animate('2s ease-in-out', style({ opacity: 0 }))
          ], { optional: true }),
        ])
      ])
    ])
  ]
})
export class ContactsComponent implements OnInit {

  constructor(
    protected route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  routerState(outlet: RouterOutlet) {
    const url = outlet.activatedRoute.snapshot.url.reduce((acc, u) => `${acc}/${u.path}`, '');
    console.log(url);
    return url;
  }
}
