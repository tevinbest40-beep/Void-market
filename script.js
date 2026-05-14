function addPost() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const contact = document.getElementById("contact").value;
  const image = document.getElementById("image").value;

  if (!title || !price || !contact || !image) {
    alert("Fill all fields");
    return;
  }

  const post = document.createElement("div");
  post.classList.add("card");

  post.innerHTML = `
    <img src="${image}" alt="account image" />
    <h3>${title}</h3>
    <p>Price: KSH ${price}</p>
    <p>Contact: ${contact}</p>
  `;

  document.getElementById("posts").appendChild(post);

  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("image").value = "";
}
