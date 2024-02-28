/* 
// 글 목록 읽기
export async function readAll(){
    const resp = await fetch('http://localhost:9999/topics/')
    const result = await resp.json();
    return result;
}

// 글 추가
export async function add(){
    const resp = await fetch("http://localhost:9999/topics", {
        method: "POST",
        body: JSON.stringify({ title: "js", body: "js is ..." }),
        headers: {
            "content-type": "application/json",
        },
    });
    const result = await resp.json();
    console.log(result);
}


// 글 읽기
export async function read(props){
    const id = props.params.id;
    const resp = await fetch(`http://localhost:9999/topics/${id}`);
    const result = await resp.json();
    return result
}


// 글 수정
export async function update(){
    const resp = await fetch('http://localhost:9999/topics/2', {
        method:'PATCH',
        body: JSON.stringify({title:'css3', body:'css3 is ...'}),
        headers: {
            'content-type': 'application/json'
    }})
    const result = await resp.json();
    console.log(result);
}


// 글 삭제
export async function remove(){
    const resp = await fetch('http://localhost:9999/topics/2', {
        method:'DELETE',
    })
    const result = await resp.json();
    console.log(result);
} */