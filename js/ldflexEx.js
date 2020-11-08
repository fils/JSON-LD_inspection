ldf = require('ldflex');

async function jld() {

    const doc = {
        "https://schema.org/name": "Manu Sporny",
        "https://schema.org/url": { "@id": "http://manu.sporny.org/" },
        "https://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
    };

    const jrso = {
  "@graph": [
   {
    "@id": "_:b0",
    "@type": [
     "https://schema.org/DataDownload"
    ],
    "https://schema.org/contentUrl": [
     {
      "@value": "https://opencoredata.org/id/jrso/do/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959"
     }
    ]
   },
   {
    "@id": "_:b2",
    "@type": [
     "https://schema.org/Place"
    ],
    "https://schema.org/geo": [
     {
      "@id": "_:b3"
     }
    ]
   },
   {
    "@id": "_:b3",
    "@type": [
     "https://schema.org/GeoCoordinates"
    ],
    "https://schema.org/latitude": [
     {
      "@value": "24.55"
     }
    ],
    "https://schema.org/longitude": [
     {
      "@value": "-79.25"
     }
    ]
   },
   {
    "@id": "_:vm0",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "0"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "A Joides Resolution expeditions"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Leg"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "int64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Leg"
     }
    ]
   },
   {
    "@id": "_:vm1",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "1"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Number identifying the site from which the core was retrieved. A site is the position of a beacon around which holes are drilled."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Site"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "int64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Site"
     }
    ]
   },
   {
    "@id": "_:vm10",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "10"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Measurement value of best-fit error in degrees Celcius."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Best_fit_error"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "sql.NullFloat64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Best_fit_error"
     }
    ]
   },
   {
    "@id": "_:vm11",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "11"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Measurement value of the temperature at mudline in degrees Celcius."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Mudline_temperature"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "sql.NullFloat64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Mudline_temperature"
     }
    ]
   },
   {
    "@id": "_:vm12",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "12"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Name of the tool used for measurement."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Tool_name"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "string"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Tool_name"
     }
    ]
   },
   {
    "@id": "_:vm13",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "13"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Remark on a run for analysis."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Run_comment"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "sql.NullString"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Run_comment"
     }
    ]
   },
   {
    "@id": "_:vm2",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "2"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Letter identifying the hole at a site from which a core was retrieved or data was collected."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Hole"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "string"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Hole"
     }
    ]
   },
   {
    "@id": "_:vm3",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "3"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Sequential numbers identifying the cores retrieved from a particular hole."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Core"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "int64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Core"
     }
    ]
   },
   {
    "@id": "_:vm4",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "4"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Letter code identifying the drill bit/coring method used to retrieve the core."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Core_type"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "string"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Core_type"
     }
    ]
   },
   {
    "@id": "_:vm5",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "5"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Meters below sea floor to top of core, as measured by drill string and reported from driller."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Top_depth_mbsf"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "float64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Top_depth_mbsf"
     }
    ]
   },
   {
    "@id": "_:vm6",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "6"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Bot_depth_mbsf"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "float64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/"
     }
    ]
   },
   {
    "@id": "_:vm7",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "7"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Number for a run for an analysis."
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Run_number"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "int64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Run_number"
     }
    ]
   },
   {
    "@id": "_:vm8",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "8"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Dht_comment"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "sql.NullFloat64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/"
     }
    ]
   },
   {
    "@id": "_:vm9",
    "@type": [
     "https://schema.org/PropertyValue"
    ],
    "https://opencoredata.org/voc/janus/v1/hasColPos": [
     {
      "@value": "9"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Measurement value of best-fit downhole temperature in degrees Celcius"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "Best_fit_temperature"
     }
    ],
    "https://schema.org/unitText": [
     {
      "@value": "sql.NullFloat64"
     }
    ],
    "https://schema.org/url": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Best_fit_temperature"
     }
    ]
   },
   {
    "@id": "https://jrso.org",
    "@type": [
     "https://schema.org/Organization"
    ],
    "https://schema.org/legalNme": [
     {
      "@value": "JOIDES Resoultion Science Operator"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "JRSO"
     }
    ],
    "https://schema.org/sameAs": [
     {
      "@id": "https://re3data.org/repository/r3d100010267"
     }
    ],
    "https://schema.org/url": [
     {
      "@value": "https://iodp.tamu.edu"
     }
    ]
   },
   {
    "@id": "https://opencoredata.org/id/jrso/do/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959.jsonld",
    "@type": [
     "https://schema.org/Dataset"
    ],
    "http://www.w3.org/ns/ldp#inbox": [
     {
      "@id": "https://opencoredata.org/id/ldn/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959/inbox"
     }
    ],
    "https://opencoredata.org/voc/janus/v1/hasHole": [
     {
      "@value": "A"
     }
    ],
    "https://opencoredata.org/voc/janus/v1/hasLeg": [
     {
      "@value": "166"
     }
    ],
    "https://opencoredata.org/voc/janus/v1/hasSite": [
     {
      "@value": "1004"
     }
    ],
    "https://opencoredata.org/voc/janus/v1/measurement": [
     {
      "@value": "JanusDhtApct"
     }
    ],
    "https://schema.org/additionalType": [
     {
      "@id": "https://opencoredata.org/voc/janus/v1/Dataset"
     },
     {
      "@id": "https://opencoredata.org/voc/janus/v1/JanusDhtApct"
     }
    ],
    "https://schema.org/description": [
     {
      "@value": "Leg 166 Site 1004 Hole A ( Janus Dht Apct )  "
     }
    ],
    "https://schema.org/distribution": [
     {
      "@id": "_:b0"
     }
    ],
    "https://schema.org/keywords": [
     {
      "@value": "DSDP, OPD, IODP, JanusDhtApct"
     }
    ],
    "https://schema.org/license": [
     {
      "@value": "https://creativecommons.org/publicdomain/zero/1.0/"
     }
    ],
    "https://schema.org/name": [
     {
      "@value": "166_1004A_JanusDhtApct_gOfQHJGF.csv"
     }
    ],
    "https://schema.org/provider": [
     {
      "@id": "https://jrso.org"
     }
    ],
    "https://schema.org/publisher": [
     {
      "@id": "https://jrso.org"
     }
    ],
    "https://schema.org/spatialCoverage": [
     {
      "@id": "_:b2"
     }
    ],
    "https://schema.org/url": [
     {
      "@value": "https://opencoredata.org/id/jrso/do/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959"
     }
    ],
    "https://schema.org/variableMeasured": [
     {
      "@id": "_:vm0"
     },
     {
      "@id": "_:vm1"
     },
     {
      "@id": "_:vm2"
     },
     {
      "@id": "_:vm3"
     },
     {
      "@id": "_:vm4"
     },
     {
      "@id": "_:vm5"
     },
     {
      "@id": "_:vm6"
     },
     {
      "@id": "_:vm7"
     },
     {
      "@id": "_:vm8"
     },
     {
      "@id": "_:vm9"
     },
     {
      "@id": "_:vm10"
     },
     {
      "@id": "_:vm11"
     },
     {
      "@id": "_:vm12"
     },
     {
      "@id": "_:vm13"
     }
    ]
   }
  ],
  "@id": "https://opencoredata.org/id/jrso/objectgraph/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959"
 };

    const opentopo =
    {
        "@context": "http://schema.org/",
        "@type": "Dataset",
        "additionalType": ["geolink:Dataset", "vivo:Dataset"],
        "name": "Topography of Normal Faults in the Volcanic Tablelands, CA 2019",
        "alternateName": "CA19_Scott",
        "description": "<p>This dataset contains high resolution topography and orthomosaic imagery along three normal fault scarps in the Volcanic Tablelands near Bishop in Eastern California. In the Volcanic Tablelands, normal faults create prominent scarps that offset the Bishop Tuff. This area has been the focus of a number of studies on fault zone structural geology and geomorphology. </p>  <p>Data was collected via uncrewed aerial vehicle (UAV) imagery over three fault scarps each with length of 2-4 km.  Data products include: point clouds, digital surface models (DSMs), and orthomosaics using structure-from-motion (SfM) techniques. </p>",
        "url": "https://portal.opentopography.org/raster?opentopoID=OTSDEM.062020.26911.1",
        "fileFormat": "Raster",
        "publisher": {
            "@type": "Organization",
            "additionalType": "geolink:Organization",
            "email": "info@opentopography.org",
            "legalName": "OpenTopography",
            "url": "https://opentopography.org",
            "award": "National Science Foundation under Award Numbers EAR-557484, 1557319 & 1557330",
            "logo": "http://www.opentopography.org/sites/opentopography.org/files/ot_transp_logo.png"
        },
        "funder": [],
        "contributor": [{
            "@type": "Organization",
            "name": "Arizona State University, School of Earth and Space Exploration",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "Arizona State University, School of Earth and Space Exploration",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "University of Washington",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "University G. d’Annunzio Chieti-Pescara",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "China Earthquake Administration",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "University G. d’Annunzio Chieti-Pescara",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "Jet Propulsion Laboratory",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "Jet Propulsion Laboratory",
            "url": "null"
        }, {
            "@type": "Organization",
            "name": "Arizona State University, School of Earth and Space Exploration",
            "url": "null"
        }],

        "variableMeasured": [{
            "@type": "PropertyValue",
            "name": "Area",
            "value": "4.1 km2"
        }, {
            "@type": "PropertyValue",
            "name": "Unit",
            "value": "meter"
        }, {
            "@type": "PropertyValue",
            "name": "RasterResolution",
            "value": "0.04 meter"
        }],
        "includedInDataCatalog": {
            "@type": "DataCatalog",
            "name": "Topography of Normal Faults in the Volcanic Tablelands, CA 2019",
            "url": "https://portal.opentopography.org/datasetMetadata?otCollectionID=OT.062020.26911.1",
            "identifier": {
                "@id": "https://doi.org/10.5069/G97S7KXT",
                "@type": "PropertyValue",
                "additionalType": ["geolink:Identifier", "datacite:Identifier"],
                "propertyID": "datacite:doi",
                "url": "https://doi.org/10.5069/G97S7KXT",
                "value": "10.5069/G97S7KXT"
            }
        },
        "temporalCoverage": "2019-04-11/2019-04-13",
        "spatialCoverage": {
            "@type": "Place",
            "additionalProperty": [{
                "@type": "PropertyValue",
                "additionalType": "CoordinatesSystem",
                "name": "Horizontal Coordinates",
                "value": "NAD83  UTM Zone 11N [EPSG: 26911]"
            }, {
                "@type": "PropertyValue",
                "additionalType": "CoordinatesSystem",
                "name": "Vertical Coordinates",
                "value": "NAVD88 (GEOID 12B) [EPSG: 5703]"
            }],
            "geo": {
                "@type": "GeoShape",
                "box": "-118.509983284443,37.4146087563437 -118.438045193405,37.4960875459988"
            }
        },
        "locationCreated": "",
        "dateCreated": "2020-06-25 16:38:10.108662",
        "license": "https://opentopography.org/usageterms",
        "isAccessibleForFree": true,
        "citation": "Scott, C., Scott, T., Arrowsmith, R., Brigham, C., Bello, S., Xu, J., Ferrarini, F. Milliner, C., Donnellan, A. (2020). Topography of Normal Faults in the Volcanic Tablelands, CA 2019. Distributed by OpenTopography. https://doi.org/10.5069/G97S7KXT. Accessed: 2020-07-09",
        "keywords": "normal fault, bishop, california, volcanic, SfM, drone, UAV, fault scarp, ",
        "identifier": {
            "@id": "https://portal.opentopography.org/raster?opentopoID=OTSDEM.062020.26911.1",
            "@type": "PropertyValue",
            "propertyID": "opentopoID",
            "value": "OTSDEM.062020.26911.1"
        }
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
