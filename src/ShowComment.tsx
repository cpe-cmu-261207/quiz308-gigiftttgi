import logo from './logo.svg';
import { comments, CommentType } from './data/comments';
import './App.css';
import { Showre } from './Showre';


export const Showcomment = () => {

    const all : CommentType[] = comments

    function ckecklike(like:number)
    {
        if(like > 0)
            return (<div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-300'>{like}</p>
                    </div>)
    }

    return(
        <div className="">
        {
        all.map(a =>
            <div>
            <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={a.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{a.username}</p>
              <p className='text-white'>{a.commentText}</p>
                  { ckecklike(a.likeNum) }
              </div>
            </div> 
            <Showre re = {a.replies}/>
            </div> 
          )}
        </div> )

}
