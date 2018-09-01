import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private authService: AuthService) {}
    @ViewChild('loginForm')
    regForm: NgForm;

    ngOnInit() {}

    onLoggedin() {
        console.log(this.regForm.value.email);
        this.authService.login(this.regForm.value.email);
    }
}
