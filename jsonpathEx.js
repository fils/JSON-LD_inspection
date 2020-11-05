jp = require('jsonpath');

async function jld() {

    const doc = {
        "https://schema.org/name": "Manu Sporny",
        "https://schema.org/url": { "@id": "http://manu.sporny.org/" },
        "https://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
    };

    const iris =
    {
        "description": "EMERALD is a complete open-source software server-based system for requesting and processing large sets of event based seismic data from a web browser. Data sets containing millions of seismic waveforms can easily be managed, reviewed, and processed. The system can automatically check for metadata updates, and alert the user to metadata changes. ",
        "image": "https://ds.iris.edu/media/product/emerald/images/emerald_logo_1.png",
        "includedInDataCatalog": {
            "url": "https://ds.iris.edu/ds/products/",
            "@id": "https://ds.iris.edu/ds/products/",
            "@type": "DataCatalog"
        },
        "dateCreated": "2013-06-13T21:06:39.089",
        "keywords": "seismic,geophysics,seismology,EMERALD",
        "alternateName": [
            "EMERALD"
        ],
        "@id": "https://ds.iris.edu/ds/products/emerald/",
        "name": "A software framework for seismic event processing",
        "author": [
            {
                "@type": "Person",
                "name": "IRIS Data Products"
            },
            {
                "affiliation": {
                    "@type": "Organization",
                    "name": "Arizona State University"
                },
                "@type": "Person",
                "name": "John West"
            }
        ],
        "url": "https://ds.iris.edu/ds/products/emerald/",
        "@type": "http://schema.org/Dataset",
        "@context": {
            "@vocab": "http://schema.org/"
        },
        "dateModified": "2017-04-28T16:34:53.521"
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

    console.log("----------------------------------------------");

   
    var cities = [
        { name: "London", "population": 8615246 },
        { name: "Berlin", "population": 3517424 },
        { name: "Madrid", "population": 3165235 },
        { name: "Rome",   "population": 2870528 }
      ];
      
      var jp = require('jsonpath');
      var q1 = jp.query(opentopo, '$.description');
      var q2 = jp.query(iris, '$.description');

      console.log(q1);
      console.log(q2);
}

jld();
