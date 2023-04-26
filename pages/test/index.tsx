import { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState<string|null>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await axios.get<{ msg: string }>('http://localhost:8000/api/go');
            console.log(response);
            setData(response.data.msg);
        } catch (error) {
            setError('データの取得に失敗しました。');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button onClick={onSubmit}>
                取得
            </button>
            {error && <div>{error}</div>}
            {loading ? (
                <div>データを取得中...</div>
            ) : (
                data && <div>{data}</div>
            )}
        </>
    );
};

export default MyComponent;