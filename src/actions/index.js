export function addBlog(payload){
    return {type: "ADD_BLOG", payload}
}

export function deleteBlog(payload){
    return {type: "DELETE_BLOG", payload}
}

export function addComment(payload){
    return {type: "ADD_COMMENT", payload}
}
