import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';
import { Job } from 'src/app/models/job';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['../../app.component.css'],
})
export class JobComponent implements OnInit {
  job = {} as Job;
  jobs: Job[];
  editing = false;
  searchText: Job['jobName']
  paginaAtual = 1;
 

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.getJobs();
  }

  saveJob(form: NgForm) {
    if (this.job.id !== undefined) {
      this.jobService.updateJob(this.job).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.jobService.saveJob(this.job).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getJobs() {
    this.jobService.getJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job).subscribe(() => {
      this.getJobs();
    });
  }

  editJob(job: Job) {
    this.editing = true;
    this.job = { ...job };
  }

  
  cleanForm(form: NgForm) {
    this.editing = false;
    this.getJobs();
    form.resetForm();
    this.job = {} as Job;
  }
}
