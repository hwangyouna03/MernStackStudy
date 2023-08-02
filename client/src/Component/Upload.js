import React, {useEffect, useState} from 'react';
import { UploadButtonDiv, UploadForm, UploadDiv } from "../Style/UploadCSS";

function Upload(props) {
    const [Content, setContent] = useState("");

    const onSubmit = () => {
        let tempArr = [...props.ContentList];
        tempArr.push(Content);
        props.setContentList([...tempArr]);
        setContent("");
    };

    useEffect(() => {
        // 컴포넌트가 나타날 때 실행되는 코드
        console.log('Content가 바뀌었습니다.')
        return() => {
            // 컴포넌트가 죽을 때 실행되는 코드
        }
        
    }, [Content]);

    return (
        <UploadDiv>
        <UploadForm>
            <label htmlFor="label">제목</label>
            <input
                id="title"
                type="text"
                value={Content}
                onChange={(e) => {
                    setContent(e.currentTarget.value);
                }}
                />
            <label htmlFor="content">내용</label>
            <textarea/>
            <UploadButtonDiv>
                <button onClick={() => {onSubmit(); }}>
                제출!
                </button>
            </UploadButtonDiv>
        </UploadForm>
        </UploadDiv>
    );
}

export default Upload;