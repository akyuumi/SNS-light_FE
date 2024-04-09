import { NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { ListErrorsComponent } from "src/app/shared/components/list-errors.component";

@Component({
  selector: "app-sample",
  standalone: true,
  imports: [RouterLink, NgIf, ListErrorsComponent, ReactiveFormsModule],
  templateUrl: "./sample.component.html",
  styleUrl: "./sample.component.css",
})
export class SampleComponent {
  // テキストボックスの値を保持するプロパティ
  text: string = "";

  constructor(private http: HttpClient) {}

  sendText(): void {
    const data = { text: this.text };
    this.http.post("API_ENDPOINT", data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error("There was an error!", error),
    });
  }
}
