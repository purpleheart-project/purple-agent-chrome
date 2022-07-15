
console.log('我是插件')

window.addEventListener("message", (ev) => {

    // console.log(ev.data,'asfasfas')

    if (ev.data.type === "__AREX_EXTENSION_REQUEST__"){
        chrome.runtime.sendMessage(ev.data, res => {
            console.log(res)
            window.postMessage(
                {
                    type: "__AREX_EXTENSION_RES__",
                    res:{
                        res,
                        r:Math.random()
                    },
                },
                "*"
            )
        })
    }


})
