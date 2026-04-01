import Header from "../Header"
import ProfileCard from "../ProfileCard"
import TextWithHeader from "../TextWithHeader"

function About() {
  return (
  <>
  <Header variant="blue" title="About us" subtitle="Meet the team" />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardEmoji="🥰🥰"
          cardHeader="Sara"
          cardSubtitle="President of Ketcham Inc."
          cardBlurb="I like sleeping and eating"
        />
        <ProfileCard
          cardEmoji="👶👶"
          cardHeader="Darcie"
          cardSubtitle="The actual boss"
          cardBlurb="I like dancing and eating waffles"
        />
      </div>
        <TextWithHeader
          mySubtitle="Our mission"
          myText="Our mission statement is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio voluptate ea saepe obcaecati eius laudantium pariatur impedit quas iste mollitia tenetur laborum exercitationem doloribus, soluta dicta magni eligendi corrupti!"
        />
     
  </>
)}

export default About