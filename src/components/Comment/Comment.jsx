import UserInfo from "../UserInfo";
import { dateFormat } from "../../helpers/general";
import CommentWrapper from "../CommentWraper";
import "../Comment.css"

const Comment = (props) => {
  return (
    <div className="Comment">
     <div className="userInfo">
      <UserInfo author={props.author} />
    </div> 
    
      <CommentWrapper > 
      <div className="comment-date">
         <p> {props.text}</p>
        {dateFormat(props.date)}
      </div> 
      </CommentWrapper>
    </div>
  );
};

export default Comment;
