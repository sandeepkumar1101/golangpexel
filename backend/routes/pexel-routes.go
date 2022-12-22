package routes

import (
	"github.com/gorilla/mux"
	"github.com/sandeepkumar1101/pexelapi/controllers"
)

var RegisterPexelRoutes = func(router *mux.Router) {
	router.HandleFunc("/pexels/videos/{query}", controllers.SearchVideos).Methods("GET")
	router.HandleFunc("/pexels/video/{id}", controllers.VideosById).Methods("GET")
	router.HandleFunc("/pexels/videos/", controllers.SearchVideos).Methods("GET")
	router.HandleFunc("/pexels/{query}", controllers.SearchPhotos).Methods("GET")
	router.HandleFunc("/pexel/{id}", controllers.PhotosById).Methods("GET")
	router.HandleFunc("/pexels/", controllers.SearchPhotos).Methods("GET")
}
