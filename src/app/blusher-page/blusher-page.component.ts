import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-blusher-page',
    templateUrl: './blusher-page.component.html',
    styleUrls: ['./blusher-page.component.scss']
})
export class BlusherPageComponent implements OnInit {
    blusherPageData = [
        {
            title: 'The Product and how it works',
            subtitle: 'Product Works As Foolows:',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            isCollapsed: true
        },
        {
            title: 'Ordering',
            subtitle: 'Ordering Means:',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            isCollapsed: true
        },
        {
            title: 'Delivery',
            subtitle: 'How Is Makeup Delivered?',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            isCollapsed: true
        },
        {
            title: 'Returns and Refunds',
            subtitle: 'Returns and Refunds work as Follows:',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            isCollapsed: true
        }
    ];
    ngOnInit() {
    }
    toggelAccordion(activeIndex) {
        this.blusherPageData.forEach((item, index) => {
            if (activeIndex === index) {
                item.isCollapsed = !item.isCollapsed;
            }
            else {
                item.isCollapsed = true;
            }
        });
    }
}
