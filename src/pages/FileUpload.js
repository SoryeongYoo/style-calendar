import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage, db } from '../firebaseConfig';
import styled from 'styled-components';
import { arrayUnion, doc, serverTimestamp, setDoc } from 'firebase/firestore';

const FileUpload = ({ selecteDate }) => {
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [UploadedImage, setUploadedImage] = useState(null)

  //파일 선택 시 state 업데이트
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  //이미지 업로드
  const handleUpload = async () => {
    if (!file || !selecteDate) return

    try {
      //저장 경로 설정(날짜별 폴더)
      const storageRef = ref(storage, `images/${selecteDate}/${file.name}`)
      await uploadBytes(storageRef, file)

      //upload된 파일의 url 가져오기
      const downloadURL = await getDownloadURL(storageRef)
      setImageUrl(downloadURL)
      console.log("check1")

      //Firestore에 날짜를 문서로 저장, 이미지 리스트를 배열로 관리
      const docRef = doc(db, "images", selecteDate);
      await setDoc(
        docRef,
        {
          imageUrls: arrayUnion(downloadURL),
          updatedAt: serverTimestamp(),
        },
        { merge: true } // 기존 데이터에 추가
      );

      setUploadedImage(downloadURL)
      alert("이미지업로드")

      

    } catch (error) {
      console.error("error: ", error)
    }


  }

  //이미지 삭제
  const deleteImage = async () => {
    const storageRef = ref(storage, `images/${file.name}`)
    try {
      await deleteObject(storageRef)
      console.log("이미지 삭제")
    } catch (error) {
      console.log("삭제실패: ", error)
    }
  }

  return (
    <Container>
      <input type='file' onChange={handleFileChange} />
      <Button onClick={handleUpload}>업로드</Button>
      <Button onClick={deleteImage}>삭제</Button>
      {imageUrl && <img src={imageUrl} alt='Uploaded' width="200" />}
    </Container>
  )
}

export default FileUpload

const Container = styled.div`

`

const Button = styled.button`

`