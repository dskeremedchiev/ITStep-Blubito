interface LectureInterface{
    startDateTime: Date;
    endDateTime: Date;
    topic: string;
    printLecture(): void;
}

class Lecture implements LectureInterface{
    private _startDateTime: Date;
    private _endDateTime: Date;
    private _topic: string;
    constructor(
        startDateTimeIn: Date,
        endDateTimeIn : Date,
        topicIn : string
        ){
            this._startDateTime = startDateTimeIn;
            this._endDateTime = endDateTimeIn
            this._topic = topicIn;
        }
    printLecture(): void {
        console.log(this._startDateTime, " - ", this._endDateTime, ":", this._topic);
    }
    public get startDateTime(): Date{
        return this._startDateTime;
    }
    public get endDateTime(): Date{
        return this._endDateTime;
    }
    public get topic(): string{
        return this._topic;
    }    
}


const l1 = new Lecture(new Date(),new Date(), "Test lecture");

l1.printLecture();