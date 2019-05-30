export class Url {
    private pureUrl: string = ""
    private body: string = ""
    
    constructor(baseUrl: string) {
        let url = new URL(baseUrl)
        this.pureUrl = url.origin + url.pathname
        this.conversionSearchToBody(url.search)
    }

    public order(order: string): Url {
        if(order != ""){
            this.addToBody("order=" + order)
        }
        return this
    }

    public page(page: number): Url {
        if(page > 0){
            this.addToBody("page=" + page)
        }
        return this
    }

    public query(query: string): Url {
        if(query != ""){
            this.addToBody("conditions[q]=" + query)
        }
        return this
    }

    public limit(limit: number): Url {
        if(limit > 0){
            this.addToBody("limit=" + limit)
        }
        return this
    }

    public conditions(field: string, value: string): Url {
        if(field != "" && value != ""){
            this.addToBody("conditions[" + field + "]=" + value)
        }
        return this
    }

    public render(): string
    {
        return this.pureUrl + this.body
    }

    private conversionSearchToBody(search: string)
    {
        if(search != ""){
            let parameters = search.replace('?','&').split("&")
            parameters.shift()
            parameters.forEach((parameter:string) => 
            {
                if(parameter.search(/page/) == 0) this.addToBody(parameter)
            })
        }
    }

    private addToBody(parameter: string)
    {
        if(this.body.search("\\?") == -1) {
            this.body = "?" + parameter
        }
        else {
            this.body += "&" + parameter
        }
    }
 }