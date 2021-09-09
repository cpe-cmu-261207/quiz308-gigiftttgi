import logo from './logo.svg';
import { comments, CommentType } from './data/comments';
import './App.css';



export const Showcomment = () => {

    const all : CommentType[] = comments
    
    return(
        <div className="">
        {
        all.map(a =>
            <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={a.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{a.username}</p>
              <p className='text-white'>{a.commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{a.likeNum}</p>
              </div>
            </div>
          </div> )}



        </div> )

}
