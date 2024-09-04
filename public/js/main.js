const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const randomCharacter = () =>
    chars[Math.floor(Math.random() * (chars.length - 1))],
  randomString = (length) =>
    Array.from(Array(length)).map(randomCharacter).join("");

const cardHover = (card, letters, e) => {
  const rect = card[0].getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  letters[0].style.setProperty("--x", `${x}px`);
  letters[0].style.setProperty("--y", `${y}px`);

  letters[0].innerText = randomString(2000);
};

const card = $(".card-hover-container");
card.each(function () {
  $(this).on("mousemove", (e) =>
    cardHover($(this), $(this).children(".card-bg-characters"), e)
  );
  $(this).on("touchmove", (e) =>
    cardHover($(this), $(this).children(".card-bg-characters"), e)
  );
});


// const cv_link = document.getElementById("cv-link");
// cv_link.href = cv_url;