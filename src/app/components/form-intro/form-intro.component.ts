import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntroService } from 'src/app/services/intro/intro.service';

declare var $:any;

@Component({
  selector: 'app-form-intro',
  templateUrl: './form-intro.component.html',
  styleUrls: ['./form-intro.component.css']
})
export class FormIntroComponent implements OnInit {

  title = 'Introduction Form';
  form_data = {
    name: "",
    image: "",
    gender: "",
    dob: "",
    address: "",
    email: "",
    college: "",
    year: "",
    city: ""
  };
  user_data:any;
  message:any;

  constructor(
    private router:Router,
    private intro: IntroService
  ) { }

  ngOnInit(): void {
    this.intro.getIntroduction().subscribe((res:any) => {
      this.title = res.data;
    });
    this.getDataFromDB();
  }

  saveData() {
    this.intro.saveToDB(this.form_data).subscribe((res:any) => {
      this.getDataFromDB();
      this.message = res.message;
      $('#exampleModalCenter').modal('show');
    });
  }

  getDataFromDB() {
    this.intro.getDemo().subscribe((res:any) => {
      // console.log(res);
      this.user_data = res.data;
      this.form_data.name = res.data[0].name;
      this.form_data.address = res.data[0].address;
      this.form_data.city = res.data[0].city;
      this.form_data.college = res.data[0].college;
      this.form_data.email = res.data[0].email;
      this.form_data.dob  = res.data[0].dob;
      this.form_data.gender = res.data[0].gender;
    })
  }

  getTableData(data:any) {
    console.log(data);
  }

}
