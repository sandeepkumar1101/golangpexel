package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/sandeepkumar1101/pexelapi/api"
)

func VideosById(w http.ResponseWriter, r *http.Request) {
	var Token = os.Getenv("PexelsToken")
	var c = api.NEWClient(Token)
	params := mux.Vars(r)
	query := params["id"]
	if query == "" {
		query = "random"
	}
	id, _ := strconv.Atoi(query)
	i := int32(id)
	result, err := c.GetVideos(i)
	if err != nil {
		fmt.Println("Search error: %s", err)
	}
	res, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
func SearchVideos(w http.ResponseWriter, r *http.Request) {
	var Token = os.Getenv("PexelsToken")
	var c = api.NEWClient(Token)
	fmt.Println("Searchin Videos")
	params := mux.Vars(r)
	query := params["query"]
	if query == "" {
		query = "random"
	}
	result, err := c.SearchVideo(query, 5, 1)
	if err != nil {
		fmt.Println("Search error: %s", err)
	}
	res, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func SearchPhotos(w http.ResponseWriter, r *http.Request) {
	var Token = os.Getenv("PexelsToken")
	var c = api.NEWClient(Token)
	fmt.Println(Token)
	params := mux.Vars(r)
	query := params["query"]
	fmt.Println(query)
	if query == "" {
		query = "random"
	}
	result, err := c.SearchPhoto(query, 5, 1)
	if err != nil {
		fmt.Println("Search error: %s", err)
	}
	res, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
func PhotosById(w http.ResponseWriter, r *http.Request) {
	var Token = os.Getenv("PexelsToken")
	var c = api.NEWClient(Token)
	fmt.Println(c)
	fmt.Println(Token)
	params := mux.Vars(r)
	query := params["id"]
	fmt.Println(query)
	if query == "" {
		query = "random"
	}
	id, _ := strconv.Atoi(query)
	i := int32(id)
	result, err := c.GetPhotos(i)
	if err != nil {
		fmt.Println("Search error: %s", err)
	}
	res, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
