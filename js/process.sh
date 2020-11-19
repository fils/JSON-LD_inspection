#!/bin/bash
# Note, this script leverage gron: https://github.com/tomnomnom/gron

mc_cmd() {
        mc find --name "*.jsonld"  $1   
        # mc ls $1 | awk '{print $5}'
        # mc find $1 | grep -v .jsonld    #  was used to get FDP fiels from pkg bucket
        # mc find --name "*.jsonld"  $1   # for FDP metadata update

        # echo "ocdmsp/scratch/dorun2/do/00028c0f98115cc14575edc67005f9beb10d89ba0db593f0108e8bce94446a76.jsonld"
        #echo "ocdmsp/ocdprod/jrso/do/03773e769e1312efaa3b843eacb1f6a3b629f632b99cec3f009137353be7a959.jsonld"
}

# If you use this for ntriples, be sure to add in a graph in the URL target
for i in $(mc_cmd $1); do
    #echo $i

    #mc cat $1/$i | curl -X PUT --header "Content-Type:application/n-quads" -d @- http://localhost:3030/$2/data
    temp_file=$(mktemp)
    out_file=$(mktemp)

    mc cat $i  > $temp_file
    cp $temp_file /tmp/jrso.json

    node /home/fils/src/Projects/ECO/JSON-LD_inspection/js/jrsoFrame.js  > $out_file

    #/usr/bin/bat -p   $temp_file 
    #/bin/cat  $out_file 

    mc cp $out_file $i
    
    var=$(/usr/bin/wc -l  $out_file)
    echo "$var for $i"

    rm $temp_file
    rm $out_file
done

