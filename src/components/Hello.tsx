const Hello = () =>{
    const onClick = () =>{
        alert('helo')
    }
    const text = 'hello react'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}
// 読み込めるようにする
export default Hello