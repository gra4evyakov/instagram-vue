const assets = import.meta.glob('../assets/img/*', {
  eager: true,
  import: 'default'
})

const getPosts = (number) => {
  const ret = [];

  for (let index = 1; index < number + 1; index++) {
    ret.push({
      user: "John",
      img: assets[`../assets/img/photo${index}.png`],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsam!",
    });
  }
  return ret;
}

export default getPosts