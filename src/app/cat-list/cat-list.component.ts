import { Component, OnInit } from '@angular/core';
import { CatService } from '../add-cat/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: any[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe((cats) => {
      this.cats = cats;
    });
  }
}
