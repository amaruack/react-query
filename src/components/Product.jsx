import {useContext, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

export const Product = () => {

    const [checked, setChecked] = useState(false);

    // 기존 custom hooks 를 사용할 경우 각 Product Component 를 사용 하는 곳 마다 해당 fetch 를 불러 왓어야 했다.
    // react-query 를 이용하여 조회한 데이터를 cache 로 저장하여 사용할 수 있다.
    const {isLoading, error, data: products} = useQuery(['products', checked], async () => {
            console.log("fetching ....")
            return fetch(`data/${checked ? 'sales.json' : 'products.json'}`)
                .then(r => r.json());
        },
        {
            staleTime: 1000 * 60 * 1
        });

    const handleChange = () => {
        setChecked(prevState => !prevState);
    }

    if (isLoading) return (<p>Loading...</p>)
    if (error) return (<p>{error}</p>)

    return (
        <>
            <input id={'checkbox'} type={'checkbox'} value={checked} onChange={handleChange}/>
            <label htmlFor={'checkbox'}>세일항목만 보기</label>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}