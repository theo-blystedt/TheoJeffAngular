import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatService } from './cat.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  catBreeds: string[] = ['Persian', 'Siamese', 'Maine Coon', 'Bengal'];
  cat = {
    breed: '',
    age: 0,
    name: '',
  };

  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.catService.addCat(this.cat).then(() => {
        form.resetForm();
        alert('Cat added successfully!');
      });
    }
  }
}
