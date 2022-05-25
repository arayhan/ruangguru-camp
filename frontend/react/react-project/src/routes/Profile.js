import { useParams } from 'react-router-dom';

function Profile() {
  const { userID } = useParams();

  console.log(userID);

  return (
    <div className="container py-8">
      <div>PROFILE</div>
    </div>
  );
}

export default Profile;
