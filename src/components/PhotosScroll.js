'use client'

import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotosScroll} from "@/store/action";
import IsLoading from "@/components/IsLoading";
import Link from "next/link";


export default function PhotosScroll() {
    const [page, setPage] = useState(1);
    const dataPhotos = useSelector(state => state.photosScroll.data);
    const isLoading = useSelector(state => state.photosScroll.isLoading)
    const dispatch = useDispatch()


    const handleInfiniteScroll = useCallback(() => {
        if (dataPhotos?.total_photos !== dataPhotos.results?.length) {
            if (window.innerHeight + document.documentElement.scrollTop + 1  >=
                document.documentElement.scrollHeight) {
                setPage(page + 1)

            }
        }
    }, [dataPhotos,page]);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll)
        return () => window.removeEventListener('scroll', handleInfiniteScroll)
    }, [handleInfiniteScroll]);


    useEffect(() => {
        dispatch(getPhotosScroll({
            page,
            limit: 12
        }))
        setPage(page)
    }, [page]);
    return (
        <main className={'photos_scroll_page'}>
            {
                dataPhotos?.results &&
                dataPhotos.results.map(item => <PhotosItem key={item.id} item={item}/>)
            }
            <div className={'last—scroll'}>
                {
                    isLoading && <IsLoading/>
                }
            </div>
        </main>
    )
}

export function PhotosItem({item}) {
    return (
        <article className={'photos_item'}>
            <Link href={'/Description/' + item.id}>
                <figure>
                    <img src={item.url} alt={item.title}/>
                </figure>
            </Link>
        </article>
    )
}