# Some thoughts on faceted search

Exploring how to leverage SPARQL that might be useful to make filters with.


* We need some basic text first searches to work with
* Then we need to be able to build some filters from those
* Then we need to feed selections on those filters back into the main 
search so we can update it and conduct the search(s) again



Our base search look like:

```SPARQL
 prefix schema: <http://schema.org/> 
 SELECT ?subj ?disurl ?score  ?name ?description  
 WHERE {    
   ?lit bds:search "new zeland" .    
   ?lit bds:matchAllTerms "false" .    
   ?lit bds:relevance ?score .    
   ?subj ?p ?lit .    
   BIND (?subj as ?s)       
    {  
      SELECT  ?s (MIN(?url) as ?disurl) 
      {   
        ?s a schema:Dataset .              
        ?s schema:distribution ?dis .  
        ?dis schema:url ?url . 
      } 
      GROUP BY ?s   
    }    
   ?s schema:name ?name .    
   ?s schema:description ?description .   
   } 
   ORDER BY DESC(?score)
LIMIT 20
OFFSET 0
```

or, if we don't care about distribution URLs 

```SPARQL
prefix schema: <http://schema.org/> 
 SELECT ?subj ?disurl ?score  ?name ?description  
 WHERE {    
   ?lit bds:search "new zeland" .    
   ?lit bds:matchAllTerms "false" .    
   ?lit bds:relevance ?score .    
   ?subj ?p ?lit .    
   BIND (?subj as ?s)       
    
   ?s schema:name ?name .    
   ?s schema:description ?description .   
   } 
   ORDER BY DESC(?score)
```


Regardless, we might like to be able to add some filters to 
this query.  To do this we would make some additional calls to get 
some filters of interest we can add.



## Type Filter

Here is a SPARQL to pull the types and their counts.  With proper
plumbing (no small feat) we can route this back into the JS as a JSON
object with selections and then leverage JS literal strings 
to build a new SPARQL query.



```SAPRQL
prefix schema: <https://schema.org/> 
SELECT ?type (count(distinct ?s) as ?scount)
WHERE {   
  {
       ?lit bds:search "new zeland" .
       ?lit bds:matchAllTerms "false" . 
       ?s ?p ?lit .
       ?s rdf:type ?type
       }
}
GROUP By ?type
ORDER By DESC(?scount)
```

Results will be something like:

| type                                 | scount |
| ------------------------------------ | ------ |
| schema:Dataset                       | 366    |
| <http://www.schema.org/Dataset>      | 96     |
| schema:DataCatalog                   | 76     |
| <https://schema.org/Dataset>         | 2      |
| <https://schema.org/ResearchProject> | 2      |
| <http://www.schema.org/Person>       | 2      |


Modified query would become like:


```SPARQL
prefix schema: <http://schema.org/> 
SELECT  ?s
WHERE {   
  {
       ?lit bds:search "Clear Creek Data" .
       ?lit bds:matchAllTerms "false" .
       ?s ?p ?lit .
        ?s rdf:type ?tfilter
        FILTER (?tfilter = schema:DataCatalog  )
       }

}
```

or with multiple items


```SPARQL
prefix schema: <http://schema.org/> 
SELECT  ?s
WHERE {   
  {
       ?lit bds:search "Clear Creek Data" .
       ?lit bds:matchAllTerms "false" .
       ?s ?p ?lit .
       ?s rdf:type ?tfilter
        FILTER (?tfilter = schema:Dataset   || ?tfilter = schema:DataCatalog)
       }

}
```


## Keyword Filter

This one is harder since the keywords are string collections.  They 
really shouldn't be, but this is what people do.  So we might want 
to parse these strings into words and then put those back into the 
bds search.  So this is a bit simpler as we don't rewrite the SPARQL, 
just add to the query string the user sends. 


```SPARQL
prefix schema: <https://schema.org/> 
SELECT  ?kw (count(distinct ?s) as ?scount)
WHERE {   
  {
       ?lit bds:search "new zeland" .
       ?lit bds:matchAllTerms "false" . 
       ?s ?p ?lit .
       ?s schema:keywords ?kw
       }
}
GROUP By ?kw
ORDER By DESC(?scount)
```

We can either feed back into the bsd based text index.  Or we can filter
on the keyword still with regex.

```SPARQL
prefix schema: <https://schema.org/> 
SELECT  ?kw ?s
WHERE {   
  {
       ?lit bds:search "new zeland" .
       ?lit bds:matchAllTerms "false" . 
       ?s ?p ?lit .
       ?s schema:keywords ?kw
          FILTER regex(?kw, "cadmium")
       }
}
```



## Variable measured

```SPARQL
prefix schema: <https://schema.org/> 
SELECT  ?vmname (count(distinct ?s) as ?scount)
WHERE {   
  {
       ?lit bds:search "New Zealand" .
       ?lit bds:matchAllTerms "false" . 
       ?s ?p ?lit .
       ?s schema:variableMeasured ?vm .
       ?vm schema:name ?vmname .
       }
}
GROUP By ?vmname 
ORDER By DESC(?scount)
```


## Publishers
```SPARQL
prefix schema: <https://schema.org/> 
SELECT  ?pubname (count(distinct ?s) as ?scount)
WHERE {   
  {
       ?lit bds:search "lidar" .
       ?lit bds:matchAllTerms "false" .
       ?s ?p ?lit .
       ?s schema:publisher ?pub .
       ?pub schema:name ?pubname .
       }
}
GROUP By ?pubname 
ORDER By DESC(?scount)
```


