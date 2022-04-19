function addBlog(event){
    event.preventDefault
    console.log("berhasil")

    let name = document.getElementById("name").value
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let desc = document.getElementById("desc").value
    let check = document.getElementById("check").value
    let img = document.getElementById("img").value

    let blog={
        name:name,
        start:start,
        end:end,
        desc:desc,
        check:check,
        img :URL.createObjectURL(img.files[0])
    }
    console.table(blog)
}
 