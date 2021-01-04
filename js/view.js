const url = new URL(location.href).searchParams
const id = url.get("id")
const grade = url.get("grade")

const lectureTitle = document.querySelector("#lecture_title")
const lectureDescription = document.querySelector("#lecture_description")
const lectureLink = document.querySelector("#lecture_link-container")

const getLectureData = async () => {
    const lecturesSnapshot = await db.ref(`/lectures/${grade}/${id}`).once("value")
    return await lecturesSnapshot.val()
}

const AddLectureDetails = async () =>{
    const lectureData = await getLectureData()
    const title = lectureData.title
    const description = lectureData.description
    const link = lectureData.link
    const grade = lectureData.grade

    lectureTitle.innerHTML = title
    lectureLink.innerHTML = link
    lectureDescription.innerHTML = description
}

AddLectureDetails()