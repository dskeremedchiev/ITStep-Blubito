import moment from 'moment';
import 'moment/locale/bg';

import React from 'react';

export default function MomentTest() {
    let now = moment().add(20, "days").format('LLLL');
    moment().locale('en');
    now =  moment.locales().toString();
    now = moment().add(20, "days").format('LLLL');

    return (
        <div>
            <h1> Moment test</h1>
            <h3>{now}</h3>
        </div>
    );
}
