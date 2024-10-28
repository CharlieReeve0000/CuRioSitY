let img;
let drukwide;
let americabold;
let america;
let week1;
let wiz;
let pixel;
let paint;
let windows;
let paper;
let skofix;
let quigley;

function preload() {
  img = loadImage('data/reordhalf.png');
  drukwide = loadFont('data/DrukTextWide.otf');
  americabold = loadFont('data/GTAmericaBold.otf');
  america = loadFont('data/GTAmericaRegular.otf');
  week1 = loadImage('data/week1.png');
  wiz = loadImage('data/wiz.png');
  concrete = loadImage('data/concrete.png');
  hello = loadImage('data/helloworld.png');   
  grid = loadImage('data/grid.png');
  noise = loadImage('data/noise.png');
  spin1 = loadImage('data/spin1.png');
  spin2 = loadImage('data/spin2.png');
  major = loadImage('data/majorwip.png');
  sko = loadImage('data/skowip.png');
  wingtips = loadImage('data/wingtips.png');
  wiggle = loadImage('data/wiggle.png');
  curiosity = loadImage('data/curiosity.png');
  pixel = loadImage('data/pixel.png');
  paint = loadImage('data/paint.png');
  skofix = loadImage('data/skofix.jpeg');
  paper = loadImage('data/paper.jpeg');
  windows = loadImage('data/windows.png');
  quigley = loadImage('data/quigley.jpg');
}

function setup() {
  createCanvas(1897, 14000);
  background(247, 245, 245);

  // Center the image at the top with adjusted size
  imageMode(CENTER);
  let newWidth = 1400;
  let newHeight = 700;
  image(img, width / 2, newHeight / 2, newWidth, newHeight);

  textAlign(CENTER);
  fill(0);

  // "Brief 3 : SKO" text
  textFont(americabold)
  textSize(28)
  text('CHARLIE REEVE', 120, 40);
  
  textFont(americabold)
  textSize(28)
  text('s4003010', 1820, 40);
  
  textFont(americabold);
  textSize(28);
  text("Brief 3 : SKO", width / 2, newHeight + 140);

  // "Scroll to view more" text
  textFont(america);
  textSize(18);
  text("Scroll to view more...", width / 2, newHeight + 170);

  textFont(drukwide);
  textSize(24);
  text("WEEK 1", width / 2, newHeight + 300);
  textFont(america);
  textSize(18);
  text("GLOBAL OUTAGE", width / 2, newHeight + 330);
  
  image(windows, width / 2, newHeight + 680, 700, 372);

  textFont(drukwide);
  textSize(24);
  text("WEEK 2", width / 2, newHeight + 1200);
  textFont(america);
  textSize(18);
  text("CLASS 1", width / 2, newHeight + 1230);
  displayParagraph(newHeight + 1300, "For the first class of codewords we were introduced to creative coding as a whole. We looked into popular coders such as JODI or Winnie Soon and what they have provided in the world of web design and online art. In the later session we took our first look at HTML and how some of the basics work; setting up a title, implementing type and understanding how code should be written. To me, the most engaging part was the idea of the ‘Crazy Eights’. This exercise required us to section a piece of paper into 8 and create different layouts for our chosen phrase. We would then have, as homework, to see how close we could get to any of our designs. In terms of an introduction, this was a welcoming task that did not force us to start off in the deep end and pushed for us to learn more outside of class. The phrase that I chose comes from a song that I have been playing on repeat, although we were taught the words “Hello World” are the choice for testing to see if your code is really working.");

  // Display week1.png below class 1
  image(week1, width / 1.4, newHeight + 1450, 680, 330); // Adjust size and position as necessary
  image(wingtips, width / 1.4, newHeight + 1800, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 3", width / 2.1, newHeight + 2100);
  textFont(america);
  textSize(18);
  text("CLASS 2", width / 2.05, newHeight + 2130);
  displayParagraph(newHeight + 2200, "Week 2 began with an introduction to ‘Concrete Poetry’, where we were shown excerpts of poems that revolved around non-linear text placement. This related to a glitch or hacked aesthetic and acted as the next step after the ‘Crazy Eights’ to get us comfortable with HTML. We then moved to a group activity to help break the ice between us students, as well as becoming comfortable with creating prototype websites from paper. The task was to think of any retro game that we felt we would recreate with the leftovers and scraps Andy had provided us with. The table I was on came to the decision to recreate a classic racing game, where players would be controlling a car from a top down view and would have to dodge obstacles and drift in order to defeat the second player. This was then presented in the later half of the class where people from other tables would interact with our system. This was to test if we thought through every component of a game and taught us to really break down every aspect and think “what would happen if the user clicked this button”.");
  
  image(concrete, width / 1.4, newHeight + 2510, 0, 0);

  textFont(drukwide);
  textSize(24);
  text("WEEK 4", width / 2.1, newHeight + 3000);
  textFont(america);
  textSize(18);
  text("CLASS 3", width / 2.05, newHeight + 3030);
  displayParagraph(newHeight + 3100, "This week of class I was unfortunately absent due to illness. This set me back quite a bit, as we were introduced to p5.js and began looking into shapes and how to position them on a canvas to create personalised digital art made entirely with code. Although I did not participate in this exercise, I conducted my own research of creative coders using scripts to create digital art. This took me to Tyler Hobbs, who specialises in creating paintings from code, while using a small robot to actually touch paint to canvas.");

  image(paint, width / 1.4, newHeight + 3250, 680, 330);
 
  textFont(drukwide);
  textSize(24);
  text("WEEK 5", width / 2.1, newHeight + 3900);
  textFont(america);
  textSize(18);
  text("CLASS 4", width / 2.05, newHeight + 3930);
  displayParagraph(newHeight + 4000, "During week 5 we picked up the pace for our paper prototype assignment and began the first half of class reading through some of the provided readings on canvas. The goal here was to find a quote from any text that we felt we connected with and use that as the base and meaning behind our paper prototypes. We would then create a ‘Crazy Eight’ page, allowing us to get our ideas out of our heads and onto the paper. I looked into ‘A Hacker Manifesto’ written by Australian hacker and writer McKenzie Wark. Prior to this, I was familiar with this book specifically, as it had appeared in another one of my assignments, however, I had never read the content inside. The quote “Yes I am a criminal. My crime is that of curiosity” spoke to me as it was the only quote that instantly sparked a flow of ideas and a phrase, I felt, was catchy enough to base a prototype website off of. In the later half of the class we furthered experimentation with p5.js and implemented different effects that we can apply to text, allowing text to move, change colour, rotate or change state depending on mousePressed, a command linking to interaction with the left mouse button.");

  image(spin1, width / 1.4, newHeight + 4150, 680, 330);
  image(spin2, width / 1.4, newHeight + 4500, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 6", width / 2.1, newHeight + 4800);
  textFont(america);
  textSize(18);
  text("CLASS 5", width / 2.05, newHeight + 4830);
  displayParagraph(newHeight + 4900, "Our 5th class required us to bring our complete paper prototype assignments in for any last minute feedback, as it was to be submitted later that night. I had my classmates around my table interact with all features in my prototype and I was able to view others' work, providing me with an insight on what our creative websites are supposed to look like. The response I received was extremely positive and caused me to consider continuing this assignment in the future for my Major Project. The second half of class got us thinking about our SKO assignment, generating a list of ideas we may pursue and areas of code that we want to explore and haven't yet.");

  image(paper, width / 1.4, newHeight + 5125, 680, 480);

  textFont(drukwide);
  textSize(24);
  text("WEEK 7", width / 2.1, newHeight + 5700);
  textFont(america);
  textSize(18);
  text("MID SEMESTER BREAK", width / 2.2, newHeight + 5730);

  image(wiz, width / 1.9, newHeight + 6050, 380, 400);

  textFont(drukwide);
  textSize(24);
  text("WEEK 8", width / 2.1, newHeight + 6600);
  textFont(america);
  textSize(18);
  text("CLASS 6", width / 2.05, newHeight + 6630);
  displayParagraph(newHeight + 6700, "The theme around our 6th class was typography in spaces. We focused the morning session on VR and augmented reality and how creative coders are expanding typography into 3D spaces as technology progresses. Coming from prior classes that centered around typography and layout, as well as classes that walked through the importance and preservation of design and physical media, I am familiar with how new technologies are making waves in the new era of design. We also had the chance to speak about the effects of A.I and its rise in popularity, as well as if it is worth exploring now or if we should stray away from it. In the afternoon session, Karen Ann helped to highlight what I found extremely important parts of personalising our code with the implementation of custom images and fonts. This is obviously helpful for a typography based class, but is something that I had been wanting to achieve in my code for a while.");

  image(wiggle, width / 1.4, newHeight + 6850, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 9", width / 2.1, newHeight + 7500);
  textFont(america);
  textSize(18);
  text("CLASS 7", width / 2.05, newHeight + 7530);
  displayParagraph(newHeight + 7600, "The entirety of this week's class was surrounding sound and spoken language. This class, after all, is about the way we as humans interact with text and reading, however audio brings in a whole new level to what can be achieved in design and storytelling. Although it is not directly linked to sound, I loved the platform poetry example that was shown in class as it allows the user to physically walk through a story, using the typography to show rather than tell what Zennyan and Mikyokyuji (or the character) are feeling. We also worked on using sound in a p5.js sketch, turning the canvas into a dial that would turn up the sound or lower it, depending on the mouse position. We also were shown how to implement our own sound into our Major Projects or SKOs. This is something I would like to use in at least one of my final submissions as music is very important to me and can add a whole new aesthetic or mood to a website.");

  image(noise, width / 1.4, newHeight + 7750, 680, 330);
  image(pixel, width / 1.4, newHeight + 8100, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 10", width / 2.1, newHeight + 8400);
  textFont(america);
  textSize(18);
  text("CLASS 8", width / 2.05, newHeight + 8430);
  displayParagraph(newHeight + 8500, "This lesson was a checkup on how we were going with our assignments, acting as a milestone for our SKO, which I was fairly behind on. However, all images and information for this assignment has been stored which gave me a chance to further my code and the general design.");

  image(sko, width / 1.4, newHeight + 8650, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 11", width / 2.1, newHeight + 9300);
  textFont(america);
  textSize(18);
  text("CLASS 9", width / 2.05, newHeight + 9330);
  displayParagraph(newHeight + 9400, "Week 11 was a half-class, providing us with one on one consultations with Karen Ann. This allowed us to ask any questions we had about difficulties we may have been having. At this point, I had realised that my SKO was not on the right track and needed some serious reconsideration, due to the time restraints of this assignment, only being a few weeks away. I spoke to Karen Ann about my Major as well, because at this point, the main idea was translating well to code, but I struggled to come up with any secondary actions and interactivity that would add that extra detail and care to my assignment.");

  image(major, width / 1.4, newHeight + 9550, 680, 330);

  textFont(drukwide);
  textSize(24);
  text("WEEK 12", width / 2.1, newHeight + 10200);
  textFont(america);
  textSize(18);
  text("CLASS 10", width / 2.05, newHeight + 10230);
  displayParagraph(newHeight + 10300, "At this point in my creative coding journey I had become fairly confident with the state of my Major Project as it was still related to the original text and featured code that actually functioned properly, which I was fairly proud of. My SKO on the other hand was not working with my initial intention. Implementing my own sound to the sketch was proving to be more difficult than it was a few weeks ago and I had a really messy code that felt as if it never worked. I decided to go through with one of my earlier ideas from a sketch I made during our 5th class that surrounded the entire SKO being on one long page that required the user to scroll in order to read more.");

  image(skofix, width / 1.4, newHeight + 10525, 680, 480);

  textFont(drukwide);
  textSize(24);
  text("WEEK 13", width / 2.1, newHeight + 11100);
  textFont(america);
  textSize(18);
  text("NO CLASS", width / 2.05, newHeight + 11130);
  
  image(quigley, width / 1.95, newHeight + 11450, 380, 540);

  textFont(drukwide);
  textSize(24);
  text("WEEK 14", width / 2.1, newHeight + 12000);
  textFont(america);
  textSize(18);
  text("CLASS 11", width / 2.05, newHeight + 12030);
  displayParagraph(newHeight + 12100, "For the final week of in class activities we mainly focussed on polishing both our Major Projects and our SKOs. We began with working on our designers' statements for the major project (also known as a rationale or reflection). In this, we would decide on the final name of our projects, define our projects in a short sentence and outline the key steps behind our website design. I had been using the name “Curiosity” for a while as that word in itself represented the original text and was the main featured text that would appear when the code would run. This was a good time to think about how far I have come in coding and the impact that it will have on me as a designer. For the later half of the class we were able to ask any questions we had about areas of our code, as well as an in depth walkthrough on how to ensure our GitHub links would work for our final submissions. Although it caused many headaches, I am still appreciative of GitHub, not only as a storage place for my work, but providing a single URL that acts as my entire assignment. To Karen Ann and Andy, thank you for an extremely interesting semester. The ability to make something as algorithmic and specific as coding not only makes sense, but seems fun to someone like me (who has zero skill in that field) is impressive.");
  
  image(curiosity, width / 1.4, newHeight + 12250, 680, 330);
}

function draw() {}

// Function to display the paragraph text
function displayParagraph(yPosition, paragraphText) {
  textAlign(LEFT);
  textWrap(WORD);
  textSize(16);
  textFont(america);
  let paragraphX = 264; // Set paragraph X position to 264 pixels from the left

  text(paragraphText, paragraphX, yPosition, 600); // Paragraph width remains 600 pixels
}
