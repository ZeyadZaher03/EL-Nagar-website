const addLecturesContainer = document.querySelector(".add-lectures_container")
const addLecturesForm = document.querySelector(".add-lectures_form")
// https://vimeo.com/496477197/266375f64c
const vimeoPlayerPrev = document.querySelector("#vimeo_player_prev")

const videoTitleInput = addLecturesForm["title"]
const videoDescriptionInput = addLecturesForm["description"]
const videoLinkInput = addLecturesForm["link"]
const videoImageInput = addLecturesForm["image"]
const videoGradeInput = addLecturesForm["grade"]

const isUrl  = (str) => {
    const regexUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;  
    if (regexUrl.test(str)) {
        return true
    }
    else{
        return false
    }
}

addLecturesForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const videoTitleValue = videoTitleInput.value.trim()
    const videoDescriptionValue = videoDescriptionInput.value.trim()
    const videoLinkValue = videoLinkInput.value.trim()
    const videoImageValue = videoImageInput.value.trim()
    const videoGrade = videoGradeInput.value.trim()

          
        

    const checkInput = (InputValue,InputSelector,kind,name)=> {
        if(kind === "string"){
            if(InputValue === "") inputMessageRun(InputSelector, 0 ,`please add video ${name}`) 
            else if(InputValue.length < 5 ) inputMessageRun(InputSelector, 0 ,`please add a valid video ${name}`)
            else{
                inputMessageRun(InputSelector, 1)
                return true
            } 
        }
        
        else if(kind === "link"){
            if(InputValue === "") inputMessageRun(InputSelector, 0 ,"please add your video url from Viemo") 
            else if(!isUrl(InputValue)) inputMessageRun(InputSelector, 0 ,"please add a valid video url from Viemo")
            else{
                inputMessageRun(InputSelector, 1)
                return true
            }
        }
        else if(kind === "select"){
            console.log(InputValue)
            if(InputValue === "") inputMessageRun(InputSelector, 0 ,"please add the grade of the lecture") 
            else{
                inputMessageRun(InputSelector, 1)
                console.log("s")
                return true
            }
        }
    }   

    const inputMessageRun = (InputSelector,kind,message)=>{
        const inputMessageContainer = InputSelector.parentNode.querySelector(".add-lectures_Input-message-container")
        const inputMessage = InputSelector.parentNode.querySelector(".add-lectures_Input-message")
        if(kind === 1){
            inputMessage.innerHTML = ""
        }else if(kind === 0){
            inputMessage.innerHTML = ""
            inputMessage.innerHTML = message
        }else{
            inputMessage.innerHTML = ""
            inputMessage.innerHTML = message
        }
    }
    
    const validityArr = [
        checkInput(videoTitleValue,videoTitleInput,"string","Title"),
        checkInput(videoDescriptionValue,videoDescriptionInput,"string","Description"),
        checkInput(videoLinkValue,videoLinkInput,"link"),
        checkInput(videoGrade,videoGradeInput,"select")
    ]
    
    const checkValidity = (arr)=>{
        let numberOfErrors = 0

        arr.forEach((validator)=>{
            if(!validator) numberOfErrors++
        })
        if(numberOfErrors === 0){
            return true
        }

    }

    if(checkValidity(validityArr)){
        const video = {
            title:videoTitleValue,
            description:videoDescriptionValue,
            link:videoLinkValue,
            grade:videoGrade
        }
        console.log(video)
        db.ref(`/lectures/${videoGrade}`).push(video)
        addLecturesForm.reset()
        
    } 
})
