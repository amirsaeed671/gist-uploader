import { from } from "rxjs";
import { pluck } from "rxjs/operators";
import api from "utils/api";

function fetchGists() {
  return from(api("gists")).pipe(pluck("data"));
}

export default fetchGists;
