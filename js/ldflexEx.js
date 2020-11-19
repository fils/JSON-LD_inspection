ldf = require('ldflex');

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



    // const context = {
    //     "name": "https://schema.org/name",
    //     "homepage": { "@id": "https://schema.org/url", "@type": "@id" },
    //     "image": { "@id": "https://schema.org/image", "@type": "@id" }
    // };

    const frame = {
        "@context": "http://schema.org/",
        "@type": "Dataset",
        "@explicit": true,
        "http://schema.org/name": {},
    };

    console.log("----------------------------------------------");


    var cities = [
        { name: "London", "population": 8615246 },
        { name: "Berlin", "population": 3517424 },
        { name: "Madrid", "population": 3165235 },
        { name: "Rome", "population": 2870528 }
    ];

    var ldf = require('jsonpath');

    const { PathFactory } = require('ldflex');
    const { default: ComunicaEngine } = require('@ldflex/comunica');
    const { namedNode } = require('@rdfjs/data-model');

    // The JSON-LD context for resolving properties
    const context = {
        "@context": {
            "@vocab": "http://xmlns.com/foaf/0.1/",
            "friends": "knows",
            "label": "http://www.w3.org/2000/01/rdf-schema#label",
        }
    };
    // The query engine and its source
    const queryEngine = new ComunicaEngine('https://ruben.verborgh.org/profile/');
    // The object that can create new paths
    const path = new PathFactory({ context, queryEngine });

    const ruben = path.create({ subject: namedNode('https://ruben.verborgh.org/profile/#me') });
    showPerson(ruben);

    async function showPerson(person) {
        console.log(`This person is ${await person.name}`);

        console.log(`${await person.givenName} is interested in:`);
        for await (const name of person.interest.label)
            console.log(`- ${name}`);

        console.log(`${await person.givenName} is friends with:`);
        for await (const name of person.friends.givenName)
            console.log(`- ${name}`);
    }
}

jld();
