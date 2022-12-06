import pageImg from "../assets/img/sea.jpg";
import textBackground from "../assets/img/sea_2.png";

export const Messages = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={pageImg} alt="" width={"100%"} />
        </div>
        <div className="col-md-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fuga
          assumenda ipsum sapiente perferendis quisquam consequatur iusto in,
          cumque maiores voluptatibus inventore. Nihil reiciendis adipisci
          repudiandae officiis qui, laudantium doloremque? Fuga suscipit
          obcaecati autem mollitia magnam. Adipisci, repudiandae velit, quae qui
          nihil vel, laboriosam sapiente illum nostrum voluptates modi porro
          tenetur tempora placeat totam illo provident odio dicta est iure.
        </div>
      </div>
      <div className="mt-4 row">
        <div
          className="col-md-6 offset-6"
          style={{ backgroundImage: `url(${textBackground})` }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          repudiandae iste aliquam qui fugiat aliquid ipsa provident
          consequuntur cumque. Nesciunt, inventore. Expedita impedit libero
          pariatur consequuntur aut molestias natus excepturi?
        </div>
      </div>
    </>
  );
};
