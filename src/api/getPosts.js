
const getPosts = (number) => {
  const ret = [];

  for (let index = 1; index < number + 1; index++) {
    ret.push({
      user: "John",
      img: new URL(`../assets/img/photo${index}.png`, import.meta.url).href,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsam!",
    });
  }
  return ret;
}

export default getPosts