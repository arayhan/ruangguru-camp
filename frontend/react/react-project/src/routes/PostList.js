import moment from 'moment';
import { AiFillWarning } from 'react-icons/ai';
import CardImage from '../components/PostCard';
import { SessionContext } from '../context/SessionContext';
import { PostContext, PostProvider } from '../context/PostContext';

function PostList() {
  return (
    <SessionContext.Consumer>
      {(session) => (
        <div className="container py-8">
          {!session && (
            <div className="bg-white p-8 shadow-md rounded-md flex flex-col items-center justify-center text-center space-y-3">
              <AiFillWarning size={40} />
              <div>Please login first</div>
            </div>
          )}

          {session && (
            <PostProvider session={session}>
              <PostContext.Consumer>
                {({ posts }) => {
                  console.log({ posts });
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {posts &&
                        posts.map((post) => (
                          <CardImage
                            key={post.id}
                            postId={post.id}
                            username={post.author.name}
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
                  );
                }}
              </PostContext.Consumer>
            </PostProvider>
          )}
        </div>
      )}
    </SessionContext.Consumer>
  );
}

export default PostList;
