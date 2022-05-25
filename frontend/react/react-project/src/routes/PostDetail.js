import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../api/config';
import moment from 'moment';

function PostDetail() {
  const { postID } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const config = { withCredentials: true };
        const response = await axios.get(`${API_URL}/post/${postID}/detail`, config);
        setPost(response.data.data);
      } catch (error) {
        console.log({ error });
      }
    };

    getPostDetail();
  }, [postID]);

  return (
    <div className="container py-8">
      {!post && <div className="text-center">Loading...</div>}
      {post && (
        <div>
          <div className="flex flex-col group bg-white rounded-md overflow-hidden shadow-md">
            <div>
              <img className="w-full h-full" src={post.image} alt="" />
            </div>

            <div className="grid grid-cols-2 gap-5 p-5">
              <div className="font-semibold border-r">Date</div>
              <div>{moment(post.createdAt).format('DD MMMM yyyy')}</div>
              <div className="font-semibold border-r">Author</div>
              <Link className="text-primary underline" to={`/profile/${post.author.id}`}>
                {post.author.name}
              </Link>
            </div>

            <hr />
            <div className="p-3">{post.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetail;
