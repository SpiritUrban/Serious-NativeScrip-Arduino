import { Component, OnInit } from "@angular/core";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { TNSTextToSpeech, SpeakOptions } from 'nativescript-texttospeech';

@Component({
    selector: "Test",
    templateUrl: "./test.component.html"
})

export class TestComponent implements OnInit {

    public navCollapse: boolean;

    
    test: string = 'Test!!!'
    private TTS: any;
    isSpeaking: boolean = false;
    private speakOptions: SpeakOptions = {
        text: 'Default text',
        speakRate: 0.99,
        pitch: 1.0, // optional - default is 1.0
        volume: 1.1, // optional - default is 1.0
        locale: 'en', // optional - default is system locale,
        language: 'en',
        finishedCallback: (() => {
            alert('asdf2')
            this.isSpeaking = false;
        })
    }

    constructor(
        private tts: TNSTextToSpeech
    ) {
    }

    speak(text: string) {
        this.isSpeaking = true;
        this.speakOptions.text = text;
        this.tts.speak(this.speakOptions);
    }

    async ngOnInit() {
        try {
            await this.tts.speak(this.speakOptions);
            setTimeout(()=>this.speak('Hello Wuasya !'), 2000)
            console.log('I can debug in console !!! Yahu!!!')
        } catch (error) {
            alert('fail');
        }
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
