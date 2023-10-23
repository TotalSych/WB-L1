const posts = document.getElementById("posts");
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
const COUNT = 50;
let storagedWallData = null;
let offset = 0;
if (localStorage.getItem("posts")?.length) {
  storagedWallData = localStorage.getItem("posts").split("Ω");
  offset = storagedWallData.length;
}
var script = document.createElement("SCRIPT");
script.src = `https://api.vk.ru/method/wall.get?domain=shrewsru&count=${COUNT}&offset=${offset}&v=5.154&access_token=61823ac261823ac261823ac2f66294344a6618261823ac204b4b8fa744c39a26db4e8e0&callback=getWallData`;

document.getElementsByTagName("head")[0].appendChild(script);
let wallData = [];

function getWallData(result) {
  if (!result.response) {
    return;
  }
  const newWallData = result.response.items.map((item) => item.text);
  offset += COUNT;
  if (localStorage.getItem("posts")?.length) {
    storagedWallData = localStorage.getItem("posts").split("Ω");
    wallData = [...storagedWallData, ...newWallData];
    if (storagedWallData.length === 0) {
      localStorage.setItem("posts", newWallData.join("Ω"));
    } else {
      localStorage.setItem(
        "posts",
        localStorage.getItem("posts") + newWallData.join("Ω")
      );
    }
  } else {
    wallData = newWallData;
    localStorage.setItem("posts", newWallData.join("Ω"));
  }

  posts.innerHTML = wallData.reduce(
    (template, post) =>
      template +
      `
            <p>${post}</p>
          `,
    ""
  );
}

posts.addEventListener(
  "scroll",
  debounce(() => {
    if (
      Math.ceil(posts.scrollHeight - posts.scrollTop) === posts.clientHeight
    ) {
      var script = document.createElement("SCRIPT");
      script.src = `https://api.vk.ru/method/wall.get?domain=shrewsru&count=${COUNT}&offset=${offset}&v=5.154&access_token=61823ac261823ac261823ac2f66294344a6618261823ac204b4b8fa744c39a26db4e8e0&callback=getWallData`;

      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }, 300)
);
