Use https://graph.geodex.org/blazegraph/#query but make sure you have 
selected "use" option for the "cdf" namespace 
in https://graph.geodex.org/blazegraph/#namespaces

Find all distinct predicates

```
prefix schema: <http://schema.org/> 
SELECT DISTINCT ?p
WHERE {    
 ?s ?p ?o
}
```

We can get a list of resource types in the graph with

```
prefix schema: <http://schema.org/> 
SELECT DISTINCT ?o
WHERE {    
 ?s rdf:type ?o
}
```

Note, these are not just the top level types though, they include sub 
types like funding source on resources.  We could leverage that most
people hang sub types off blank nodes and do.

```
prefix schema: <http://schema.org/> 
SELECT DISTINCT ?o
WHERE {    
 ?s rdf:type ?o
 FILTER (!isBlank(?s))
}
```

This is a slower call (about 1 second), so it might not be good to use on the fly to populate a 
UI.

To get a count, for example, for the datasets there is

```
prefix schema: <http://schema.org/> 
SELECT  (count(distinct ?s) as ?count)
WHERE {   
  {
    ?s ?p schema:Dataset
       }
UNION 
{
   ?s ?p <https://schema.org/Dataset> 
  }
}
```

Note, the CDF graph is not fully populated yet.  You will get 45K results.
Note the required union across http and https 

