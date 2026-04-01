
import ProfilePic from "../ProfilePic"
import Header from "../Header"
import TextWithHeader from "../TextWithHeader"

function Profile() {
  return (
  <>
    <div className="grid grid-cols-2 gap-4">
        <ProfilePic picEmoji="👶" />
        <Header title="My profile" subtitle="The procrasti-cleaner" />
      </div>

      <TextWithHeader
        mySubtitle="my stats"
        myText="10 completed recently! 5 to go"
      />
      <TextWithHeader
        mySubtitle="my goals"
        myText="i want to feel good in my space and feel successful"
      />
  </>
)}

export default Profile