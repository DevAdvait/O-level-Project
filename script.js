// About Page
function aboutPage() {
  // Get Main-Content Div
  const temp = document.getElementById("main-content");
  temp.innerHTML = "";
  //   Create div
  const content = document.createElement("div");
  //   Add Class to div
  content.className = "about-us";
  //   Create content inside the div
  content.innerHTML = `<p style="margin:5% 10%;font-size:2rem;font-weight:600;font-family: cursive;text-align:center;">At GymChain, we believe that fitness is about more than just working out. It's about creating a healthy and balanced lifestyle that makes you feel your best.<br><br>That's why we focus on more than just the physical aspects of fitness – we also prioritize mental and emotional well-being, and strive to create a supportive and welcoming community where everyone feels included and valued.<br><br> Our expert trainers are here to help you reach your fitness goals, and we offer a variety of workouts and classes that are tailored to your needs and abilities. So come visit us and see what GymChain has to offer!</p>`;
  //   Append element to parent
  temp.appendChild(content);
}

function workoutsPage() {
  // Data to create Cards
  const workoutData = [
    {
      name: "Squats",
      image: "./images/squats.jpg",
      description:
        "Stand with your feet shoulder-width apart and your arms at your sides. Lower your body as if you're sitting back into a chair, keeping your chest up and your weight in your heels. Push through your heels to return to the starting position.",
    },
    {
      name: "Lunges",
      image: "./images/lunges.jpg",
      description:
        "Step forward with one leg and lower your body until your thigh is parallel to the ground. Push through your heel to return to the starting position, and repeat on the other side.",
    },
    {
      name: "Push-ups",
      image: "./images/pushup.jpg",
      description:
        "Start in a plank position with your hands shoulder-width apart and your feet hip-width apart. Lower your body until your chest nearly touches the ground, then push back up to the starting position.",
    },
    {
      name: "Planks",
      image: "./images/plank.jpg",
      description:
        "Start in a plank position with your hands shoulder-width apart and your feet hip-width apart. Hold this position for 30 seconds to a minute, keeping your core engaged and your body in a straight line.",
    },
    {
      name: "Sit-ups",
      image: "./images/situps.jpg",
      description:
        "Start by lying on your back with your knees bent and your feet flat on the ground. Place your hands behind your head, keeping your elbows out to the sides. Engage your core and lift your upper body off the ground, bringing your torso towards your knees. Lower your body back down to the starting position, and repeat the movement for the desired number of repetitions.",
    },
  ];
  const temp = document.getElementById("main-content");
  temp.innerHTML = "";
  const content = document.createElement("div");
  content.className = "workout-content row px-auto justify-content-center ";

  //   Iterating through workoutData to create Cards
  workoutData.forEach((element) => {
    const workOutCard = document.createElement("div");
    workOutCard.className = "card col col-3 m-3";
    workOutCard.innerHTML = `<img src=${element.image} class="card-img-top" alt="Workout Image"><div class="card-body"><h5 class="card-title">${element.name}</h5><p class="card-text">${element.description}</p></div>`;
    content.appendChild(workOutCard);
  });

  //   Append element to parent
  temp.appendChild(content);
}

function contactPage() {
  // Get Main-Content Div

  const temp = document.getElementById("main-content");
  temp.innerHTML = "";
  //   Create div

  const content = document.createElement("div");
  //   Add Class to div

  content.className = "about-us";
  //   Create content inside the div

  content.innerHTML = `<p style="margin:5% 10%;font-size:2rem;font-weight:600;font-family: cursive;text-align:center;">
  Need to get in touch with us? We're always happy to help! Here's how you can reach us:<br>
  Phone: 555-555-1212<br>
  Email: info@gymchain.com<br>
  Address: 123 Main Street, Anytown, USA<br><br>
  Our locations are open Monday through Friday from 6:00am to 10:00pm, and Saturday and Sunday from 8:00am to 8:00pm.<br><br>Drop by and see us, or give us a call if you have any questions. We look forward to hearing from you!</p>`;
  //   Append element to parent

  temp.appendChild(content);
}
