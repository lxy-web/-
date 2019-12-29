module.exports={
	devServer:{
		before(app){
			let data=require("./city.json")
			app.get("/get_data",(req,res)=>{
				res.send({
					code:200,
					msg:"全部数据",
					data
				})
			})
		}
	}
}