import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("Global", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://appxx.azurewebsites.net/posts",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en,pl;q=0.9,pl-PL;q=0.8,en-US;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.20);
		req = [{
			"method": "post",
			"url": "https://appxx.azurewebsites.net/post/add/newpost",
			"body": "{\"body\":\"Something\",\"title\":\"Title\"}",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en,pl;q=0.9,pl-PL;q=0.8,en-US;q=0.7"
				}
			}
		},{
			"method": "options",
			"url": "https://appxx.azurewebsites.net/post/add/newpost",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Accept": "*/*",
					"Access-Control-Request-Method": "POST",
					"Access-Control-Request-Headers": "content-type",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en,pl;q=0.9,pl-PL;q=0.8,en-US;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://appxx.azurewebsites.net/posts",
			"params": {
				"headers": {
					"Host": "appxx.azurewebsites.net",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
					"Accept": "*/*",
					"Origin": "https://red-water-022d04b03.azurestaticapps.net",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "cors",
					"Sec-Fetch-Dest": "empty",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en,pl;q=0.9,pl-PL;q=0.8,en-US;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
