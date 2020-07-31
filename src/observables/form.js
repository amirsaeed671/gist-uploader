import api from "utils/api";
import { from } from "rxjs";
import { catchError } from "rxjs/operators";

function postGist({ ext, content, description, isPublic }) {
  const data = {
    description,
    public: isPublic,
    files: {
      [ext]: { content },
    },
  };
  return from(api.post("gists", data)).pipe(
    catchError((err) => {
      throw err;
    })
  );
}

export default postGist;
