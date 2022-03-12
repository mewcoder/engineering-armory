import _ from "lodash";

const str = _.join(["hello", "webpack"], "--demo");

export default function () {
  console.log(str);
}
