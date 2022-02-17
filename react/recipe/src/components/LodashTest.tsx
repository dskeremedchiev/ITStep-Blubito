import lodash from 'lodash';
import React from 'react';
//const _ = require('lodash');


export default function LodashTest() {
    let result;
    result = lodash.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], (n: number) => n % 3);
    result = lodash.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3);
    result = lodash.flattenDeep([1, [2, [3, [4]], 5]]);
    const objects = [
        {
            'a': 1,
            'f': ()=> 'it works',
        },
        {
            'b': 2
        }
    ];
    result = lodash.cloneDeep(objects);
    objects[0].f = ()=> 'Second function';
    const test:any = objects[0].f;

    console.log(test());
    const test1:any=result[0].f;
    console.log(test1());

    
    //console.log(result);

    return (
        <div>
            <h3>Lodash test</h3>

        </div>
    );
}
