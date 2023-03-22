import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from './service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team = {
    league: '',
    name: '',
    founded: 0,
    country: '',
  };

  constructor(private xService: Service) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.xService.addTeam(this.team).then(() => {
        form.resetForm();
        alert('Team added successfully!');
      });
    }
  }
}
