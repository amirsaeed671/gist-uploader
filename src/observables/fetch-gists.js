import { from } from "rxjs";
import api from "utils/api";

function fetchGists() {
  return from(api("gists"));
}

export default fetchGists;
