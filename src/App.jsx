import "./App.css";
import Comment from "./components/Comment/Comment";

function App() {
  const comment = [
    {
      date: new Date(),
      text: "Ты не идеален, но, делая ошибки, ты учишься на них. Мне кажется, настоящая сила заключается в этом.",
      id:1,
      author: {
        name: "Хината Хьюга",
        avatarUrl:
          "http://fc08.deviantart.net/fs71/f/2010/345/d/d/into_the_darkness_by_satokochaaan-d34pm5g.jpg",
      },
    },
    {
      date: new Date(),
      id:2,
      text: "Ты не идеален, но, делая ошибки, ты учишься на них. Мне кажется, настоящая сила заключается в этом.",
      author: {
        name: "Хината Хьюга",
        avatarUrl:
          "http://fc08.deviantart.net/fs71/f/2010/345/d/d/into_the_darkness_by_satokochaaan-d34pm5g.jpg",
      },
    },
    {
      date: new Date(),
      id: 3,
      text: "Ты не идеален, но, делая ошибки, ты учишься на них. Мне кажется, настоящая сила заключается в этом.",
      author: {
        name: "Хината Хьюга",
        avatarUrl:
          "http://fc08.deviantart.net/fs71/f/2010/345/d/d/into_the_darkness_by_satokochaaan-d34pm5g.jpg",
      },
    },
  ];

  return (
    <div className="appBlock">
      {comment.map((item) => (
        <Comment key={item.id} author={item.author} text={item.text} date={item.date} />
      ))}
    </div>
  );
}

export default App;
