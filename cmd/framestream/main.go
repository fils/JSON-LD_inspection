package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/piprate/json-gold/ld"
)

func main() {
	//proc := ld.NewJsonLdProcessor()
	//options := ld.NewJsonLdOptions("")
	proc, options := JLDProc()

	frame := map[string]interface{}{
		"@context": "https://schema.org/",
		"@type":    "https://schema.org/Dataset",
	}

	var b bytes.Buffer
	input := bufio.NewScanner(os.Stdin)
	for input.Scan() {
		b.WriteString(input.Text())
		//	fmt.Println(input.Text())
	}

	var myInterface interface{}
	err := json.Unmarshal(b.Bytes(), &myInterface)
	if err != nil {
		log.Println("Error when transforming JSON-LD document to interface:", err)
	}

	framedDoc, err := proc.Frame(input.Text(), frame, options)
	if err != nil {
		panic(err)
	}

	ld.PrintDocument("JSON-LD framing succeeded", framedDoc)
}

func JLDProc() (*ld.JsonLdProcessor, *ld.JsonLdOptions) {
	proc := ld.NewJsonLdProcessor()
	options := ld.NewJsonLdOptions("")

	client := &http.Client{}
	nl := ld.NewDefaultDocumentLoader(client)

	// testing caching
	cdl := ld.NewCachingDocumentLoader(nl)
	cdl.PreloadWithMapping(map[string]string{"https://schema.org/": "./web/jsonldcontext.json"})

	options.DocumentLoader = cdl
	options.Format = "application/nquads"

	return proc, options
}
