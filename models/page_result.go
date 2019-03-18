/**
*@Author: haoxiongxiao
*@Date: 2019/3/18
*@Description: CREATE GO FILE models
*/
package models

type PageResult struct {
	Code        int         `json:"code"`
	Page        int         `json:"page"` //当前页
	Message     string      `json:"message"`
	Status      int         `json:"status"` //订单状态
	Count       int         `json:"count"`  //每页条数
	Total       int         `json:"total"`  //总数
	UserId      uint        `json:"user_id"`
	OrderNumber string      `json:"order_number"` //订单号
	Data        interface{} `json:"data"`
}

type PageCommentResult struct {
	Code    int         `json:"code"`
	HotleId string      `json:"hotle_id"`
	Page    int         `json:"page"` //当前页
	Message string      `json:"message"`
	Status  int         `json:"status"` //评论状态
	Count   int         `json:"count"`  //每页条数
	Total   int         `json:"total"`  //总数
	UserId  uint        `json:"user_id"`
	Data    interface{} `json:"data"`
}
