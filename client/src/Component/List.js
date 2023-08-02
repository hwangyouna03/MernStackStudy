import React, {useEffect, useState} from 'react';
import axios from "axios";

function List(props) {
    const [Text, setText] = useState("")

    useEffect(() => {

        let body = {
            text : "Hello",
        };

        axios
            .post("/api/test", body)
            .then(function (response) {
                //성공 핸들링
                console.log("요청 성공", response);
                setText(response.data.text);
            })
            .catch(function (error) {
                //에러 핸들링
                console.log("요청 실패", error);
            })
            .then(function () {
                //항상 실행되는 영역
            })
    })

    return(
        <div>
            <h1>List!</h1>
            {props.ContentList.map((content, idx) => {
            return (
                <div
                    key={idx}
                    style={{
                        width: "100%",
                        marginLeft: "1rem",
                    }}>
                    내용 : {content}
                    <hr/>
                </div>
            );
            })}
        </div>
    )
}

export default List;