import React, {useEffect, useState} from 'react';

export default function useProduct(checked) {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(undefined);

        fetch(`data/${checked ? 'sales.json': 'products.json'}`)
            .then(r => r.json() )
            .then((data) => {
                console.log('dtaa');
                setProducts(data);
            }).catch(e => setError('error 발생') )
            .finally(() => (setLoading(false)));
        // unmount 될때 호출 되는 함수
        return () => {
            console.log('깨끗이 청소');
        };

    }, [checked]);

    return [loading, error, products];
};