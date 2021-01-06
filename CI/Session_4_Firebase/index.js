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
  const res = await db.collection('users').get();
  console.log(res.docs);
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

function addDocument() {
  const data = {
    name: 'Đỗ Hoàng Anh',
    age: 18
  }
  db.collection('users').add(data)
}

addDocument();