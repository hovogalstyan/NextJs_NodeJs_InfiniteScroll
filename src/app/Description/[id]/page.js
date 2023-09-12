'use client'
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import photosSlide from "@/store/reducer/photosSlide";
import {PuffLoader} from "react-spinners";
import {useCallback, useEffect, useState} from "react";
import {getPhotosId} from "@/store/action";

export default function Profile() {
    const [activeIndex, setActiveIndex] = useState(1)
    const slidData = useSelector(state => state.photosSlide.data);
    const isLoading = useSelector(state => state.photosSlide.isLoading);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getPhotosId(id))
    }, [id, dispatch]);

    const handleEditIndex = useCallback((index) => {
        setActiveIndex(index)
    }, [activeIndex]);

    const handleFrsBtn = useCallback(() => {
        if (activeIndex > 1) {
            setActiveIndex(index => index - 1)
        }

    }, [activeIndex])

    const handleNextBtn = useCallback(() => {
        if (activeIndex !== slidData.length) {
            setActiveIndex(prov => prov + 1)
        } else {
            setActiveIndex(1)
        }
    }, [activeIndex, slidData])
    return (
        <section className={'photos_slide'}>
            <div className="slider_container">
                {
                    slidData && slidData.map((item, index) => (
                        <figure className={activeIndex === index + 1 ? 'active_slide_img' : ''} key={item.id}>
                            <img src={item.url} alt={item.title}/>
                        </figure>
                    ))
                }
                <div onClick={handleNextBtn} className={'next-btn'}>
                    <div className={'btn'}/>
                </div>
                <div onClick={handleFrsBtn} className={'frs-btn'}>
                    <div className={'btn_frs'}/>
                </div>
            </div>
            <div className="dont_block">
                {
                    slidData && slidData.map((item, index) => (
                        <div onClick={() => handleEditIndex(index + 1)}
                             className={activeIndex === index + 1 ?
                                 'active_dont_item' : ''}
                             key={index}/>
                    ))
                }
                <div className={'indicator'}/>

            </div>
            {
                isLoading && <div className={'is_loading'}>
                    <PuffLoader color="#36d7b7"/>
                </div>
            }
        </section>
    )
}