import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count: any[] = []

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.searchBackground()
    this.count = [
      {imageLink: 'assets/images/shirt-removebg-preview.png'},
      {imageLink: 'assets/images/shirt22-removebg-preview.png'},
      {imageLink: 'assets/images/shirt-removebg-preview.png'},
      {imageLink: 'assets/images/shirt22-removebg-preview.png'},
      {imageLink: 'assets/images/shirt-removebg-preview.png'},
      {imageLink: 'assets/images/shirt22-removebg-preview.png'},
    ]
  }

  searchBackground = () => {
    let searchbar = document.getElementById("search");
    let searchTop = searchbar!.offsetTop;

    window.addEventListener('scroll', function() {
      if (window.scrollY > searchTop) {
        searchbar!.classList.add("search-background");
        searchbar!.classList.add("topshadow");
      } else {
        searchbar!.classList.remove("search-background");
        searchbar!.classList.remove("topshadow");
      }
    });
  }

  goToDetails = (item:any) => {
    this.router.navigateByUrl(
      `/details`,
      { state: { item } }
    );
  }

}
