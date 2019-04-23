import { Component, OnInit } from '@angular/core';
import { DrinkerService } from 'src/app/drinker.service';
import { Drinker } from '../drinker.model';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.scss']
})
export class DrinkersComponent implements OnInit {

  drinkers: Drinker[];
  constructor(private drinkerService: DrinkerService) { }

  ngOnInit() {
    this.drinkerService.getDrinkers().subscribe(data => {
      this.drinkers = data.map(i => {
        return {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        } as Drinker;
      });
    });
  }

  create(drinker: Drinker) {
      this.drinkerService.createDrinker(drinker);
  }

  update(drinker: Drinker) {
    this.drinkerService.updateDrinker(drinker);
  }

  addBeer(drinker: Drinker) {
    this.drinkerService.addBeer(drinker);
  }

  subtractBeer(drinker: Drinker) {
    this.drinkerService.subtractBeer(drinker);
  }

  delete(id: string) {
    this.drinkerService.deleteDrinker(id);
  }
}
