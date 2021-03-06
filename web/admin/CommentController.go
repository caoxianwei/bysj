/**
*@Author: haoxiongxiao
*@Date: 2019/3/20
*@Description: CREATE GO FILE admin
*/
package admin

import (
	"bysj/models"
	"bysj/services"
	"github.com/kataras/iris"
	"github.com/spf13/cast"
)

type CommentController struct {
	Ctx     iris.Context
	Service *services.CommentService
	Common
}

func NewCommentController() *CommentController {
	return &CommentController{Service: services.NewCommentService()}
}

func (this *CommentController) PostList() (result *models.PageCommentResult) {
	if err := this.Ctx.ReadJSON(&result); err != nil {
		result.Code = 10001
		result.Message = cast.ToString(err)
		return
	}
	this.Service.List(result)
	return
}

func (this *CommentController) PostUpdate() {
	m := make(map[string]interface{})
	if err := this.Ctx.ReadJSON(&m); err != nil {
		this.ReturnJson(10001, cast.ToString(err))
		return
	}

	if err := this.Service.Update(m); err != nil {
		this.ReturnJson(10002, cast.ToString(err))
		return
	}
	this.ReturnSuccess()
}
