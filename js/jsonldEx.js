jsonld = require('jsonld');

async function jld() {

    const jrso = require('./jrso.json')
    const jrsoflat = require('./jrsoFlat.json')
    const jrsoframed = require('./jrsoframed.json')
    const opentopo = require('./opentopo.json')
    const iris = require('./iris.json')

    const doc = {
        "https://schema.org/name": "Manu Sporny",
        "https://schema.org/url": { "@id": "http://manu.sporny.org/" },
        "https://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
    };

    const context = {
        "name": "https://schema.org/name",
        "homepage": { "@id": "https://schema.org/url", "@type": "@id" },
        "image": { "@id": "https://schema.org/image", "@type": "@id" }
    };

    const frame = {
        "@context": "https://schema.org/",
        "@type" : "https://schema.org/Dataset"
      };

    const framed = await jsonld.frame(jrso, frame);
    console.log(JSON.stringify(framed, null, 2));

    // console.log("----------------------------------------------");

    // const framed2 = await jsonld.frame(opentopo, frame);
    // console.log(JSON.stringify(framed2, null, 2));


    // // compact a document according to a particular context
    // const compacted = await jsonld.compact(doc, context);
    // console.log(JSON.stringify(compacted, null, 2));


    // console.log("----------------------------------------------");

    // const flattened = await jsonld.flatten(doc);
    // console.log(JSON.stringify(flattened, null, 2));



}

jld();

