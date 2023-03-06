import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Submit {
  CreditScore: number,
  Geography: number,
  Gender: number,
  Age: number,
  Tenure: number,
  Balance: number,
  NumOfProducts: number,
  HasCrCard: number,
  IsActiveMember: number,
  EstimatedSalary: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banco';
  titulos = ['CreditScore', 'Geography', 'Gender', 'Age', 'Tenure', 'Balance', 'NumOfProducts', 'HasCrCard', 'IsActiveMember', 'EstimatedSalary'];
  form = new FormGroup({
    CreditScore: new FormControl('', [Validators.required]),
    Geography: new FormControl('0', [Validators.required]),
    Gender: new FormControl('0', [Validators.required]),
    Age: new FormControl('', [Validators.required]),
    Tenure: new FormControl('', [Validators.required]),
    Balance: new FormControl('', [Validators.required]),
    NumOfProducts: new FormControl('', [Validators.required]),
    HasCrCard: new FormControl('0', [Validators.required]),
    IsActiveMember: new FormControl('0', [Validators.required]),
    EstimatedSalary: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) { }

  async enviar()
  {
    let form = this.form.getRawValue() as Submit;
    console.log(form);

    let teste = await this.http.post('https://PredicaoBanco.gabriel-duarte1.repl.co/calcular', form).subscribe(
      data => alert("Exite " + data['result'] + "% de probabilidade desse cliente sair do banco"),
      error => console.error(error)
    );

    console.log(teste);
  }
}
