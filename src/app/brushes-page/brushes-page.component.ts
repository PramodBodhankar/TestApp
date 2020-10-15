import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-brushes-page',
    templateUrl: './brushes-page.component.html',
    styleUrls: ['./brushes-page.component.scss']
})
export class BrushesPageComponent implements OnInit {
    brushesForm: FormGroup;
    ngOnInit() {
        this.brushesForm = new FormGroup(
            {
                fullName: new FormControl('', [Validators.required]),
                emailId: new FormControl('', [Validators.required, Validators.email]),
                phoneNumber: new FormControl('', [Validators.required]),
                dateOfBirth: new FormControl('', [Validators.required]),
                country: new FormControl('', [Validators.required])
            }
        )
    }
    saveData()
    {
        console.log(this.brushesForm.value);
    }
}
