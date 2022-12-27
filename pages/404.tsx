import { useRouter } from 'next/router';
import React, { useEffect } from 'react';


export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }), [];
    return (
        <div className='title-notfound'>
            <p>Opppppsss......</p>
            <p>Halaman yang anda cari gadaa </p>
        </div>
    );
}
