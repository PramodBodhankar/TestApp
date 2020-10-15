import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageData = [
    {
      name: 'Blusher',
      image: 'Image-02.jpg'
    },
    {
      name: 'Brushes',
      image: 'Image-03.jpg'
    },
    {
      name: 'Mascara',
      image: 'Image-04.jpg'
    },
    {
      name: 'Perfume',
      image: 'Image-05.jpg'
    },
    {
      name: 'Hair',
      image: 'Image-06.jpg'
    }
  ];
  activePageIndex = -1;
  activePageData = null;
  defaulPageData = {
    name: 'Enhancing Your Beauty Experience',
    image: 'Image-01.jpg'
  };
  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activePageData = this.defaulPageData;
    // console.log(this.activeRoute);
    // this.activeRoute.params.subscribe((params) => {
    //   console.log(params);
    // });
  }
  setActivePage(index) {
    this.activePageIndex = index;
    this.activePageData = this.pageData[this.activePageIndex];
    this.router.navigateByUrl(this.activePageData.name.toLocaleLowerCase());
  }
}
