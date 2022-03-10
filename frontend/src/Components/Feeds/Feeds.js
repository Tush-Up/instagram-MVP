import { Posts } from "../Posts";
import { Comments } from "../Comments";
import "./Feeds.css";

export default function Feeds() {
  return (
    <div>
      <section className="card">
        <div className="user">
          <p>TushUp</p>
        </div>
        <Posts />
        <Comments />
      </section>
    </div>
  );
}
