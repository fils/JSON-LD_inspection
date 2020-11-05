# JSON-LD inspection 

A repository of some testing for deterministic reading of JSON-LD data graphs (objects)
that take highly different approaches to encoding and employed contexts/vocabularies


## Testing done with

* <a href="https://github.com/digitalbazaar/jsonld.js">JSON-LD JS</a>
* <a href="https://github.com/dchester/jsonpath">JSONPath"</a>
* <a href="https://github.com/LDflex/LDflex">LDFlex</a>

## About

The example at https://dx.geodex.org/?o=/iris/107b0c662fa9051d3714b0e93fef981713d2ca48.jsonld exposes an issue.
Different approaches to the graph can make make parsing in the web components an issue.

To address this we likely need to explore framing which will allow us to more easily parse
the various data graphs.  

```bash
curl https://dx.geodex.org/id/summoned/iris/107b0c662fa9051d3714b0e93fef981713d2ca48.jsonld >> iris.json


curl https://dx.geodex.org/id/summoned/opentopo/fb914d048e7d430114ee39d208ec5ddef37e151a.jsonld >> opentopo.json
```

Example Site
[IRIS](https://dx.geodex.org/?o=/iris/107b0c662fa9051d3714b0e93fef981713d2ca48.jsonld)

This one errors on cross schema (https -> http)
[Opentopo](https://dx.geodex.org/?o=/opentopo/fb914d048e7d430114ee39d208ec5ddef37e151a.jsonld)
