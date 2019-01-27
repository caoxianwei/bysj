/**
*@Author: haoxiongxiao
*@Date: 2019/1/26
*@Description: CREATE GO FILE bysj
*/
package main

import (
	"bysj/services/api_services"
	"log"
)

func main() {

	req := api_services.SearchRequestParams{
		KeyWord:      "keyWord",
		Page:         "page",
		CityName:     "cityName",
		IDate:        "iDate",
		OutDate:      "outDate",
		SortCode:     "sortCode",
		ReturnFilter: "returnFilter",
		Star:         "star",
		Feature:      "feature",
		MinPrice:     "minPrice",
		MaxPrice:     "maxPrice",
		Facility:     "facility",
		HotelLabels:  "hotelLabels",
	}
	log.Println(api_services.ApiSearch(req))

}
