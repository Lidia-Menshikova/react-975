import styles from "./Profile.module.css";

const Profile = () => {
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
        <h1 style={{ backgroundColor: "lightblue" }}>Фамилия и имя</h1>
        <h2 className={styles.about}>Рассказ о себе</h2>
        <p>E-mail: ivan@ya.ru</p>
        <p>Id: 2</p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, ipsa impedit. A vitae officiis quam dicta reprehenderit
          cupiditate molestias debitis sint ab mollitia, vel fuga tempore fugit
          veritatis eos praesentium!
        </p>
      </div>
    </div>
  );
};

export default Profile;
