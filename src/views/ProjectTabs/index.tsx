/*
*  Create by xic, date: 2022/3/20
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {useLayoutEffect} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';

const ProjectTabs = function(){
    const myRef = React.createRef<HTMLDivElement>();
    function handleScorll(isRight:boolean): void{
        myRef.current?.scrollBy({
            behavior: "smooth",
            left: isRight ? 200 : -200
        })
    }
    useLayoutEffect(() =>{
        window.addEventListener('resize',()=>{
            console.log(getComputedStyle(myRef.current as HTMLDivElement))
        })
    })
    return (
        <div className="flex w-full h-full">
            <div className="bg-[#FF7179]/80 flex justify-center items-center cursor-pointer mr-2 " onClick={() => handleScorll(false)}>
                <ArrowBackIosNewIcon/>
            </div>
            <div className="flex h-full overflow-x-auto scroll-smooth w-11/12" ref={myRef}>
                <div className="relative shrink-0 basis-36 h-full bg-[#6D417D]/80 mr-2 flex justify-center items-center border-t-4 border-rose-600">
                    <span className="inline-block truncate max-w-[98px]">1222222222222223232</span>
                    <CloseIcon fontSize="small" className="absolute right-2 cursor-pointer"/>
                </div>
                <div className="relative shrink-0 basis-36 h-full bg-[#6D417D]/80 mr-2 flex justify-center items-center border-t-4 border-rose-600">
                    <span className="inline-block truncate max-w-[98px]">1</span>
                    <CloseIcon fontSize="small" className="absolute right-2 cursor-pointer"/>
                </div>
                <div className="relative shrink-0 basis-36 h-full bg-[#6D417D]/80 mr-2 flex justify-center items-center border-t-4 border-rose-600">
                    <span className="inline-block truncate max-w-[98px]">1</span>
                    <CloseIcon fontSize="small" className="absolute right-2 cursor-pointer"/>
                </div>
            </div>
            <div className="bg-[#FF7179]/80 flex justify-center items-center cursor-pointer" onClick={() => handleScorll(true)}>
                <ArrowForwardIosIcon/>
            </div>
        </div>

    )
}
export default ProjectTabs
