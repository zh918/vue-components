// 全局注入 
import './rem'
import {injectHttp} from './http'
import {injectCookie} from './storage' 
import {injectLog} from './log'

export const injectGlobal = () => {
	injectHttp();
	injectCookie();
	injectLog();
}