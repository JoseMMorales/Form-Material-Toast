import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    const { name, email, message } = this.form?.value;
    const url: string = '';

    this.http.post<any>(url, { name, email, message });
    this.toast.success(`Name: ${name}, Email: ${email}, Message: ${message} `);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: this.fb.control(null),
      email: this.fb.control(null),
      message: this.fb.control(null),
    });
  }
}
