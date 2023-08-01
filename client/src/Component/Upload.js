import React, {useEffect, useState} from 'react';

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
        <div>
            <input
                type="text"
                value={Content}
                onChange={(e) => {
                    setContent(e.currentTarget.value);
                }}
                />
            <button
                onClick={() => {
                    onSubmit();
                }}
                style={{ marginTop : "1rem" }}
            >제출! </button>
        </div>
    );
}

export default Upload;