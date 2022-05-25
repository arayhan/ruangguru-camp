import { AiFillWarning } from 'react-icons/ai';
import UploadForm from '../components/UploadForm';
import { SessionContext } from '../context/SessionContext';
import { PostContext, PostProvider } from '../context/PostContext';
import moment from 'moment';
import PostCard from '../components/PostCard';

function Home() {
  return (
    <PostProvider>
      <PostContext.Consumer>
        {({ posts, setPosts }) => (
          <>
            <UploadForm onSubmit={(post) => setPosts([...posts])} />

            <SessionContext.Consumer>
              {({ isLoggedIn }) => (
                <div className="container py-8">
                  {!isLoggedIn && (
                    <div className="bg-white p-8 shadow-md rounded-md flex flex-col items-center justify-center text-center space-y-3">
                      <AiFillWarning size={40} />
                      <div>Please login first</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {posts &&
                      posts.map((post) => (
                        <PostCard
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
                </div>
              )}
            </SessionContext.Consumer>
          </>
        )}
      </PostContext.Consumer>
    </PostProvider>
  );
}

export default Home;
