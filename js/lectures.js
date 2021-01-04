const lecturesContainer = document.querySelector(".lectures-container")

const addVideoItem = (videoObj, id)=>{
    const title = videoObj.title
    const description = videoObj.description

    const containerTag = document.createElement("a") 
    
    const infoContainer = document.createElement("div") 
    const imageContainer = document.createElement("div") 
    
    const titleTag = document.createElement("h3") 
    const decriptionTag = document.createElement("p") 
    const imageTag = document.createElement("img") 

    
    containerTag.classList.add("lecture-container")
    
    infoContainer.classList.add("lecture-container_info")
    imageContainer.classList.add("lecture-container_image-container")
    
    titleTag.classList.add("lecture-container_title")
    decriptionTag.classList.add("lecture-container_description")
    imageTag.classList.add("lecture-container_image")

    
    
    containerTag.href = id
    titleTag.innerText = title
    decriptionTag.innerText = description
    imageTag.src = "assets/images/mathbookcalc.jpg"
    
    infoContainer.appendChild(titleTag)
    infoContainer.appendChild(decriptionTag)
    imageContainer.appendChild(imageTag)
    containerTag.appendChild(infoContainer)
    containerTag.appendChild(imageContainer)
    
    return containerTag
}

db.ref("lectures/3/").on("value",(snapshot)=>{
    snapshot.forEach((snapshotItem)=>{
        const videoObj = snapshotItem.val()
        const videoId = snapshotItem.key
        const lectureContainer = addVideoItem(videoObj,videoId)
        lecturesContainer.appendChild(lectureContainer)
    })
})

