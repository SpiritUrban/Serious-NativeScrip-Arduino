import { Component, OnInit } from "@angular/core";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    public navCollapse: boolean;
    public test: string = 'Test!!!'
    public stateFirst: boolean = false;

    constructor(
        private routerExtensions: RouterExtensions
    ) {
    }

    async ngOnInit() {
        try {
            console.log('I can debug in console !!! Yahu!!!')
            // this.goTo('test')
        } catch (error) {
            alert('fail');
        }
    }

    toggleNav() {
        this.navCollapse = !this.navCollapse
    }

    change() {
        this.stateFirst = !this.stateFirst;
        console.log('Change', this.stateFirst);
    }

    goTo(page) {
        console.log('......................')
        this.routerExtensions.navigate(["/" + page],
            {
                clearHistory: true,
                animated: true,
                transition: {
                    name: 'flip',
                    duration: 2000,
                    curve: 'linear'
                }
            }
        );
    }

    minDate: Date = new Date(1975, 0, 29);
    maxDate: Date = new Date(2045, 4, 12);

    onDatePickerLoaded(args) {
        // const datePicker = args.object as DatePicker;
    }

    onDateChanged(args) {
        console.log("Date New value: " + args.value);
        console.log("Date value: " + args.oldValue);
    }

    onDayChanged(args) {
        console.log("Day New value: " + args.value);
        console.log("Day Old value: " + args.oldValue);
    }

    onMonthChanged(args) {
        console.log("Month New value: " + args.value);
        console.log("Month Old value: " + args.oldValue);
    }

    onYearChanged(args) {
        console.log("Year New value: " + args.value);
        console.log("Year Old value: " + args.oldValue);
    }
}
