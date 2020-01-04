import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event = {
        id:1,
        name: 'Angular Connect',
        date: '9/02/2020',
        time: '10:00 am',
        price: 600,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 NBO',
            city: 'Nairobi',
            country: 'Kenya'
        }
    }
   
}