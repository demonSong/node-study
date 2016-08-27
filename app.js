var express = require('express')
var path =require('path')
var port = process.env.PORT || 3000
var mongoose =require('mongoose')
var bodyParser=require('body-parser')
var serverStatic=require('serve-static')
var app =express()

mongoose.connect('mongodb://localhost/imooc')

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.urlencoded({ extended: false }))
//path.join(_dirname,'bower_components')
app.use(serverStatic('bower_components'))
app.listen(port)

console.log('imooc started on port '+port)

//添加路由

//index page

app.get('/',function(req,res){
	Movie.fetch(function(err,movies) {
		if(err) {
			console.log(err)
		}

		res.render('index',{
			title:'imooc 首页'
			movies: movies
		})
	})

	res.render('index',{
		title : 'imooc 首页',
		movies: [{
			title:'机械战警',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:6,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title : 'imooc 详情页',
		movie: {
			doctor:'demon song',
			country:'中国',
			title:'机械战警',
			year:'2014',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'demon song巨作'
		}
	})
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title : 'imooc 后台录入页',
		movie : {
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})

app.get('/admin/list',function(req,res){
	res.render('list',{
		title : 'imooc 列表页',
		movies: [{
			title:'机械战警',
			_id:1,
			doctor:'demon song',
			country:'美国',
			year:'2014',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://v.youku.com/v_show/id_XMTY1NzIwMDMyOA==.html?beta&from=s1.8-1-1.2&spm=0.0.0.0.WcwK05',
			summary:'demon song巨作'
		}]
	})
})

