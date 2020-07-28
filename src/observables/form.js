import axios from "axios";
import { from } from "rxjs";
import { catchError } from "rxjs/operators";

function postGist({ ext, content, description, isPublic }) {
  return from(
    axios({
      url: "https://api.github.com/gists",
      method: "POST",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
      data: {
        description,
        public: isPublic,
        files: {
          [ext]: { content },
        },
      },
    })
  ).pipe(
    catchError((err) => {
      throw err;
    })
  );
}

export default postGist;
