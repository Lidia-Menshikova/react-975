import pageImg from "../assets/img/mount.jpg";
import textBackground from "../assets/img/raft.jpg";

const Messages = () => {
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-md-6">
          <img src={pageImg} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ratione, autem quidem harum ea molestias officia quam amet dolore,
          exercitationem consequuntur. Recusandae ipsum vel excepturi quas,
          numquam exercitationem itaque odio.
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="col-md-6 offset-6"
          style={{ backgroundImage: `url(${textBackground})` }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eius
          possimus harum temporibus? Iusto accusamus excepturi ipsum amet,
          tempore quod voluptate corrupti quae dolore. Dolorum dicta vero rem at
          blanditiis.
        </div>
      </div>
    </>
  );
};
export default Messages;
