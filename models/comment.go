/**
*@Author: haoxiongxiao
*@Date: 2019/3/18
*@Description: CREATE GO FILE models
*/
package models

import "github.com/jinzhu/gorm"

type Comment struct {
	gorm.Model
	HotelId   string
	HotelName string
	UserId    uint
	Content   string
	Status    int //评论状态
}
