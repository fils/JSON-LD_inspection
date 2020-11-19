jsonld = require('jsonld');

async function jld() {
    const jrso = require('/tmp/jrso.json')

    const frame = {
        "@context": "https://schema.org/",
        "@type" : "https://schema.org/Dataset"
      };

    // frame a document
    const framed = await jsonld.frame(jrso, frame);
    console.log(JSON.stringify(framed, null, 2));

}

jld();
