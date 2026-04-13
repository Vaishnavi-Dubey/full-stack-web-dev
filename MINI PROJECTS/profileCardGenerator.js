//! 1. select the target element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

//! 2. create new HTML elements (document.createElement())
function createProfileCard() {
  // Clear previous card (optional, for single card)
  appContainer.innerHTML = "";

  // Create the main card container
  const profileCard = document.createElement("div");
  profileCard.className = "profile-card";

  // Create avatar container
  const avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";

  const profileImage = document.createElement("img");
  profileImage.src = "https://i.pravatar.cc/150?img=5";
  profileImage.alt = "Profile Picture";

  avatarDiv.appendChild(profileImage);

  // Name
  const name = document.createElement("h2");
  name.className = "name";
  name.textContent = "Vaishnavi Dubey";

  // Title
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "Frontend Developer";

  // Description
  const description = document.createElement("p");
  description.className = "description";
  description.textContent =
    "Building beautiful and functional web interfaces with passion.";

  // Social icons
  const socialIcons = document.createElement("div");
  socialIcons.className = "social-icons";

  const socialLinks = [
    {
      href: "#",
      src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      alt: "GitHub",
    },
    {
      href: "#",
      src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      alt: "LinkedIn",
    },
    {
      href: "#",
      src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      alt: "Twitter",
    },
  ];

  socialLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = link.src;
    img.alt = link.alt;

    a.appendChild(img);
    socialIcons.appendChild(a);
  });

  //! 5. Build the structure
  profileCard.appendChild(avatarDiv);
  profileCard.appendChild(name);
  profileCard.appendChild(title);
  profileCard.appendChild(description);
  profileCard.appendChild(socialIcons);

  //! 6. Append to DOM
  appContainer.appendChild(profileCard);
}

//! Trigger on button click
generateBtn.addEventListener("click", createProfileCard);
