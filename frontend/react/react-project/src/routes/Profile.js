import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../api/config';
import PostCard from '../components/PostCard';

function Profile() {
  const { userID } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const config = { withCredentials: true };
        const response = await axios.get(`${API_URL}/profile/${userID}`, config);
        setUser(response.data.data);
      } catch (error) {
        console.log({ error });
      }
    };

    getUserDetail();
  }, [userID]);

  return (
    <div className="container py-8">
      {!user && <div className="text-center">Loading...</div>}
      {user && (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center text-center space-y-5">
            <img className="w-40 rounded-full" src={user.profile.image} alt="" />
            <div className="font-semibold text-xl">{user.profile.name}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {user.posts.map((post) => (
              <PostCard
                key={post.id}
                postId={post.id}
                caption={post.content}
                date={moment(post.createdAt).format('DD MMMM yyyy')}
                image={post.image}
                likeCount={post.likeCount}
                liked={post.liked}
                dislikeCount={post.dislikeCount}
                disliked={post.disliked}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
