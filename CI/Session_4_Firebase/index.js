// Read

// getOneDocument();
getManyDocuments();


async function getOneDocument() {
    const docId = 'xA8Z8EaUx5oWDhNTs9to';
    //doc chỉ tìm được ID
    let res = await db.collection('users').doc(docId).get();
    let user = getDataFromDoc(res);
    console.log(user);
}

//Read Multi
async function getManyDocuments() {
    const res = await db.collection('users').where('email', 'array-contains', 'email1').get();
    //Field là array dùng array-contains trong where
    
    const users = getDataFromDocs(res.docs);
    console.log(users)
  //Bắt buộc phải .docs


}

function getDataFromDoc(res) {
    const user = res.data();
    user.id = res.id;
    return user;
}


function getDataFromDocs(docs) {
  // const arr = [];
  // for(const item of docs) {
  //   arr.push(getDataFromDoc(item));
  // }
  // return arr

    return docs.map(getDataFromDoc)

}



//Create

// function addDocument() {
//     const data = {
//     name: 'Đỗ Hoàng Anh',
//     age: 18
//     }
//     db.collection('users').add(data)
// }

// addDocument();


//Update
function updateDocument() {
    const idUpdate = 'MA9LsCXb5zNdK7S3mhCh';
    const dataToUpdate = {
        phones: firebase.firestore.FieldValue.arrayUnion('1123')
    }
    db.collection('users').doc(idUpdate).update(dataToUpdate);
}

updateDocument();


//Delete
function deleteDocument() {
    const idUpdate = 'MA9LsCXb5zNdK7S3mhCh';
    db.collection('users').doc(idUpdate).delete();
}

deleteDocument();