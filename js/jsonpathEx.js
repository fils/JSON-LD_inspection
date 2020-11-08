jp = require('jsonpath');

async function jld() {
    const jrso = require('./jrso.json')
    const jrsoflat = require('./jrsoFlat.json')
    const jrsoframed = require('./jrsoframed.json')
    const opentopo = require('./opentopo.json')
    const iris = require('./iris.json')

    const context = {
        "name": "https://schema.org/name",
        "homepage": { "@id": "https://schema.org/url", "@type": "@id" },
        "image": { "@id": "https://schema.org/image", "@type": "@id" }
    };

    const frame = {
        "@context": "http://schema.org/",
        "@type": "Dataset",
        "@explicit": true,
        "http://schema.org/name": {},
    };

    var jp = require('jsonpath');

    //  var q1 = jp.query(opentopo, '$.description');
    //  console.log(q1);

    //  var q2 = jp.query(iris, '$.description');
    //  console.log(q2);

    var q2 = jp.query(jrsoframed, '.[https://schema.org/description]');
    console.log(q2);
}

jld();
