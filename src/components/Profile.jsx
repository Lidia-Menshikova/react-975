import styles from "./Profile.module.css";

const Profile = (props) => {
  let user = props.functiion();
  console.log(user);
  return (
    <div className="row">
      <div className="col-sm-3">
        <img
          src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
          alt=""
          width={"70%"}
        />
      </div>
      <div className="col-sm-9">
        <h1 style={{ backgroundColor: "lightblue" }}>{user.name} </h1>
        <h2 className={styles.about}>Рассказ о себе</h2>
        {user.lastname}
        <p>E-mail: {user.email}</p>
        <p>Id: {user.id}</p>
        <p className={styles.paragraph}>{user.about}</p>
      </div>
    </div>
  );
};

export default Profile;
