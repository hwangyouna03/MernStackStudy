import React, {useState} from 'react';

function Test() {
    const [Content, setContent] = useState("");
    const [ContentList, setContentList] = useState([]);

    const onSubmit = () => {
        let tempArr = [...ContentList];
        tempArr.push(Content);
        setContentList([...tempArr]);
        setContent("");
    };

    return (
        <div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%'}}>
        {ContentList.map((content, idx) => {
            return (<div key={idx} style={{width: '100%', marginLeft: '1rem'}}>
                내용 : {content}<hr /></div>)
        })}
        <input type="text" value={Content} onChange={(event) => {
            console.log(event.currentTarget.value)
            setContent(event.currentTarget.value)} // 사용자가 입력한 값을 추척할 수 있다.
        }/>
        <button style={{marginTop : '1rem'}} onClick={() => onSubmit()}>제출!</button>
    </div>
    )
}

export default Test
;