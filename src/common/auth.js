// 权限校验
import router from '../router' 

export const authRouter = ()=> {
	// router.beforeEach((to,from,next)=>{  
	// 	if (!Cookie.get('access_token') && to.name != 'login'){
	// 		next({name:'login'});
	// 	}
	// 	else{
	// 		next();
	// 	}
	// }) 

	router.beforeEach((to,from,next)=>{  
		next();
	})  
}

export const auth = (data) => {
	// 根据返回,处理超时等相关用户信息操作
	log('用户登录超时')
	router.push({path:'/Login'});
}