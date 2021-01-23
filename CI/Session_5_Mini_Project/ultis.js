export function emailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



export async function uploadFile (file){
    // tao duong dan den file
    const fileName = file.name
    const filePath = `images/${fileName}`
    // tro den duong dan do
    const fileRef = firebase.storage().ref().child(filePath)
    // day file len duong dan day
    await fileRef.put(file)
    // sau khi xong thi lay url
    return getFileUrl(fileRef)
    }

    function getFileUrl(fileRef) {
        return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
    }