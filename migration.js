const defaultPreference = {
    version: 4,
    mode: 'day',
    lastIndex: 0,
    list: [{
        content: ''
    }]
}

    ; (() => {
        window.migration = async results => {
            if (results.version === 2) {
                results.list = [{
                    content: results.content || ''
                }]
                results.version = defaultPreference.version
                delete results.content
                await browser.storage.sync.set(results)
                browser.storage.sync.remove('content')
            }
            if (results.version === 3) {
                results.lastIndex = 0
                await browser.storage.sync.set(results)
            }
        }
    })()
