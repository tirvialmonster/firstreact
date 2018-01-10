//fetch
export function fetchFn(options,_this){
	
	//console.log(options);
	
	if(!options.method){
		options.method = 'GET';
	}
	if(!options.successFn){
		options.successFn = function(){}
	}
	if(!options.errorFn){
		options.errorFn = function(){}
	}
	
	return new fetchDataFn(options,_this);
}

function fetchDataFn(options,_this){
	//请求
	fetch( options.url , {
        method:options.method,
        body:JSON.stringify(options.params)
    }).then(response => {
        return response.json();
    })
    .then(data => {
        options.successFn(data,_this);
    }).catch(e => {
    	options.errorFn();
        console.log('fetch请求失败');
    })
}
