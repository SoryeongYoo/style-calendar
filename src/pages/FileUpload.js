import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebaseConfig';
import styled from 'styled-components';

const FileUpload = () => {
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return

    //저장 경로 설정
    const storageRef = ref(storage, `images/${file.name}`)
    await uploadBytes(storageRef, file)

    //upload된 파일의 url 가져오기
    const downloadURL = await getDownloadURL(storageRef) 
    setImageUrl(downloadURL)
  }

  //이미지 삭제
  const deleteImage = async () => {
    const storageRef = ref(storage, "images/example.jpg")
    try{
      await deleteObject(storageRef)
      console.log("이미지 삭제제")
    }catch (error){
      console.log("삭제실패: ", error)
    }
  }
  
  return (
    <Container>
      <input type='file' onChange={handleFileChange} />  
      <Button onClick={handleUpload}>업로드</Button>
      {imageUrl && <img src={imageUrl} alt='Uploaded' width="200" />}
    </Container>
  )
}

export default FileUpload

const Container = styled.div`

`

const Button = styled.button`

`