import style from "../components/card.module.css";

export default function Card() {
  return (
    <>
      <main className={style.background}>
        <div className={style.container}>
          <div className={style.cardbody}>
            <img src="" alt="" />
            <h3>Titolo del Post</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              assumenda id a enim ratione aperiam facere velit eveniet dolores
              nisi, rerum illo, quia odio quaerat aspernatur harum tempora
              blanditiis totam.
            </p>
            <button className={style.cardbutton}>Leggi di più</button>
          </div>
        </div>
      </main>
    </>
  );
}