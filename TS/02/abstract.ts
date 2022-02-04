interface LectureInterface{
    startDateTime: Date;
    endDateTime: Date;
    topic: string;
    printLecture(): void;
}

abstract class LectureABC {
    protected startDateTime: Date;
    protected endDateTime: Date;
    protected topic: string;
    constructor(
        startDateTimeIn: Date,
        endDateTimeIn : Date,
        topicIn : string
        ){
            this.startDateTime = startDateTimeIn;
            this.endDateTime = endDateTimeIn
            this.topic = topicIn;
        }
    /*abstract printLecture(): void; */
    printLecture(): void {
        console.log(this.startDateTime, " - ", this.endDateTime, ":", this.topic);
    }
}


class Lecture extends LectureABC{
    constructor(
        startDateTimeIn: Date,
        endDateTimeIn : Date,
        topicIn : string
        ){
            super(startDateTimeIn, endDateTimeIn, topicIn)
        }
    // printLecture(): void {
    //     console.log(this.startDateTime, " - ", this.endDateTime, ":", this.topic);
    // }
    override printLecture(): void {
        console.log(this.startDateTime, " : ", this.endDateTime, "::", this.topic);
    }
}

const l1 = new Lecture(new Date(),new Date(), "Test lecture");

l1.printLecture();