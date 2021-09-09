import logo from './logo.svg';
import { comments, CommentType } from './data/comments';
import './App.css';

interface prop {
    re : CommentType[]
}

export const Showre : React.FC<prop> = ({re}) => {

    //const all : CommentType[] = comments.re
    return(
    <div>
        {re.map(a => 
        <div className="flex p-2 items-start space-x-2 pl-14">
        <img className="w-10 w-10 rounded-full" src={a.userImagePath}></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{a.username}</p>
              <p className='text-white'>{a.commentText}</p>
              </div>
              </div>)

            
        }
          
            </div>
    )
}