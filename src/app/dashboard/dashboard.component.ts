import { Component, ElementRef, OnInit } from '@angular/core';
import { SetBackgroundColorService } from '../services/utils/set-background-color.service';
import { UniversityService } from '../services/university/university.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [SetBackgroundColorService, UniversityService]
})
export class DashboardComponent implements OnInit {

  public universities: any = ''

  constructor(
    private setBackgroundColorService: SetBackgroundColorService,
    private universityService: UniversityService
    ) { }

  ngOnInit(): void {
    // this.setBackgroundColorService.setBackgroundColor('')

    this.universityService.getUniversities()
    .subscribe({
      error: (err) => {
        console.log(err)
      },
      next: (resp) => {
        this.universities = resp
      }
    })
  }
}
