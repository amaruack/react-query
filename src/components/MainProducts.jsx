import {Product} from "./Product";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";

export const MainProducts = () => {

    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);

    // context 에서 queryclient 가져오기 // 해당 노드의 parent 노드에서 Provider 를 이용하여 설정 해놈
    const client = useQueryClient();

    const handleClick = () => {
        // react query 에서 관리 하는 cache 데이터 invalidate 처리
        client.invalidateQueries(['products', false])
    }

    return (
        <div className={'container_product'}>
            {showLeft && <Product></Product>}
            <button onClick={() => setShowLeft(prevState => !prevState)}>Toggle</button>
            {showRight && <Product></Product>}
            <button onClick={() => setShowRight(prevState => !prevState)}>Toggle</button>

            <button onClick={handleClick}>updated</button>
        </div>
    )
}