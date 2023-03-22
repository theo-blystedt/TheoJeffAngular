import { Component, OnInit } from '@angular/core';
import { Service } from '../add-team/service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];

  constructor(private xService: Service) { }

  ngOnInit(): void {
    this.xService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
