package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/sandeepkumar1101/pexelapi/routes"
)

func main() {
	os.Setenv("PexelsToken", "<Your Api Toke>")
	r := mux.NewRouter()
	routes.RegisterPexelRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", r))

}
