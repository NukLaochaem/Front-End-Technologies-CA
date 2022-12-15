const data = [
  {
    id: "1",
    icon: "bi bi-android2",
    description: "android icon",
    info: "december meme",
    image: "https://i.imgflip.com/73j53g.jpg",
  },

  {
    id: "2",
    icon: "bi bi-arrow-through-heart-fill",
    description: "heart icon",
    info: "drake meme",
    image: "https://i.imgflip.com/737x4a.jpg",
  },
  {
    id: "3",
    icon: "bi bi-bandaid-fill",
    description: "bandaid icon",
    info: "yoda meme",
    image: "https://i.imgflip.com/73j3kc.jpg",
  },
  {
    id: "4",
    icon: "bi bi-bug",
    description: "bug icon",
    info: "pablo escobar meme",
    image: "https://i.imgflip.com/73npez.jpg",
  },
  {
    id: "5",
    icon: "bi bi-tsunami",
    description: "tsunami icon",
    info: "coding meme",
    image: "https://i.imgflip.com/6x6wjk.jpg",
  },
];

const tableBody = document.querySelector("tbody");
data.forEach((text) => {
  tableBody.innerHTML += `<tr class="hover">
                            <td>${text.id}</td>
                            <td><i class="${text.icon}"></i></td>
                            <td>${text.description}</td>
                            <td>${text.info}</td>
                            <td>
                                <img height=150 width=200 src="${text.image}">
                            </td>
                          </tr>`;

  $(document).ready(function () {
    $("tbody img").wrap($("<a>", { href: text.image, target: "_blank" }));
    $(".hover:even").hover(
      function () {
        $(this).css("color", "red");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  });
});
