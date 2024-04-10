import { NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-sample",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./sample.component.html",
  styleUrl: "./sample.component.css",
})
export class SampleComponent {
  // テキストボックスの値を保持するプロパティ
  text: string = "";

  constructor(private http: HttpClient) {}

  sendText(): void {
    const data = { text: this.text };
    this.http.post("http://localhost:8080/sample", data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error("There was an error!", error),
    });
  }
}
