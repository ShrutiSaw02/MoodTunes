const moodData = {
  happy: {
    title: "Feeling Happy!",
    quote: "Happiness is a direction, not a place.",
    image: "assets/images/happy.jpg",
    songs: [
       "https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH",
      "https://open.spotify.com/embed/track/4xkOaSrkexMciUUogZKVTS",
      "https://open.spotify.com/embed/track/3fP7b2zG5aFZ6dF6mMWo7d"
    ]
  },
  sad: {
    title: "Feeling Sad",
    quote: "Tears come from the heart, not from the brain.",
    image: "assets/images/sad.jpg",
    songs: [
       "https://open.spotify.com/embed/track/4iJyoBOLtHqaGxP12qzhQI",
      "https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB",
      "https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q"
    ]
  },
  excited: {
    title: "Feeling Excited!",
    quote: "Excitement is the spark that ignites greatness.",
    image: "assets/images/excited.jpg",
    songs: [
       "https://open.spotify.com/embed/track/6JV2JOEocMgcZxYSZelKcc",
      "https://open.spotify.com/embed/track/2cOUlop2ZakjOKe4WinesN",
      "https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB"
    ]
  },
  calm: {
    title: "Feeling Calm",
    quote: "Peace begins with a smile.",
    image: "assets/images/calm.jpg",
    songs: [
       "https://open.spotify.com/embed/track/3yfqSUWxFvZELEM4PmlwIR",
      "https://open.spotify.com/embed/track/7eJMfftS33KTjuF7lTsMCx",
      "https://open.spotify.com/embed/track/0vFOzaXqZHahrZp6enQwQb"
    ]
  },
  romantic: {
    title: "Feeling Romantic",
    quote: "Love is composed of a single soul inhabiting two bodies.",
    image: "assets/images/romantic.jpg",
    songs: [
       "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v",
      "https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a",
      "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f"
    ]
  },
  angry: {
    title: "Feeling Angry",
    quote: "For every minute you are angry you lose sixty seconds of happiness.",
    image: "assets/images/angry.jpg",
    songs: [
       "https://open.spotify.com/embed/track/2nLtzopw4rPReszdYBJU6h",
      "https://open.spotify.com/embed/track/1AwjE1czGIVVtz619I6v1T",
      "https://open.spotify.com/embed/track/5sNESr6pQfIhL3krM8CtZn"
    ]
  }
};

// Load last mood if any
const lastMood = localStorage.getItem("lastMood");
if (lastMood && moodData[lastMood]) {
  const lastMoodMsg = document.createElement("p");
  lastMoodMsg.innerText = `🌟 Last time you felt ${moodData[lastMood].title}`;
  document.querySelector(".container").prepend(lastMoodMsg);
}

const moodButtons = document.querySelectorAll(".mood-btn");
const moodTitle = document.getElementById("mood-title");
const moodQuote = document.getElementById("mood-quote");
const moodImage = document.getElementById("mood-image");
const moodSong = document.getElementById("mood-song");
const resultSection = document.getElementById("mood-result");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const data = moodData[mood];
    moodTitle.innerText = data.title;
    moodQuote.innerText = data.quote;
    moodImage.src = data.image;
    moodSong.src = data.songs[Math.floor(Math.random() * data.songs.length)];
    resultSection.classList.remove("hidden");

    localStorage.setItem("lastMood", mood);
  });
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const newTheme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
});