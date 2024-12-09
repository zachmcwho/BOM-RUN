
const bookOfMormonCharacters = [
	{
		name: "Nephi",
		description: "Nephi was the son of Lehi, a prophet, and the founder of the Nephite nation. Known for his obedience and faith, he built a ship to lead his family to the promised land and authored much of the early Book of Mormon record. Nephi exemplified unwavering trust in God despite facing persecution from his brothers.",
		quotes: [
			"1 Nephi 3:7 - 'I will go and do the things which the Lord hath commanded.'",
			"2 Nephi 2:25 - 'Adam fell that men might be; and men are, that they might have joy.'",
			"2 Nephi 5:27 - 'And it came to pass that we lived after the manner of happiness.'"
		]
	},
	{
		name: "Lehi",
		description: "Lehi was a prophet who led his family out of Jerusalem after receiving a vision of its destruction. He taught his children about the gospel, the plan of salvation, and the importance of keeping God's commandments. His teachings laid the spiritual foundation for generations.",
		quotes: [
			"1 Nephi 1:20 - 'I, Lehi, have seen many things, yea, great and marvelous things.'",
			"2 Nephi 2:6 - 'Wherefore, redemption cometh in and through the Holy Messiah.'",
			"2 Nephi 2:27 - 'Men are free according to the flesh; and all things are given them which are expedient unto man.'"
		]
	},
	{
		name: "Jacob",
		description: "Jacob, the younger brother of Nephi, was a prophet who focused on teaching about the Atonement, the covenants of the Lord, and social equality. His ministry included rebuking pride and immorality among the Nephites.",
		quotes: [
			"Jacob 4:4 - 'We knew of Christ, and we had a hope of his glory many hundred years before his coming.'",
			"Jacob 2:18 - 'Before ye seek for riches, seek ye for the kingdom of God.'",
			"Jacob 4:7 - 'The Lord God showeth us our weakness that we may know that it is by his grace we have power.'"
		]
	},
	{
		name: "Enos",
		description: "Enos, the son of Jacob, is remembered for his earnest prayer and the spiritual transformation that followed. His experience demonstrates the power of seeking forgiveness and maintaining a relationship with God.",
		quotes: [
			"Enos 1:5 - 'Thy sins are forgiven thee, and thou shalt be blessed.'",
			"Enos 1:15 - 'Whatsoever thing ye shall ask in faith, believing that ye shall receive in the name of Christ, ye shall receive it.'",
			"Enos 1:27 - 'I shall see his face with pleasure, and he will say unto me: Come unto me, ye blessed.'"
		]
	},
	{
		name: "Mosiah",
		description: "King Mosiah was a righteous leader who governed with wisdom and translated the Jaredite plates. He established a system of judges to govern the Nephites, ensuring liberty and justice. He taught his people the value of service.",
		quotes: [
			"Mosiah 2:18 - 'I, Mosiah, have not sought gold nor silver of you.'",
			"Mosiah 2:17 - 'When ye are in the service of your fellow beings ye are only in the service of your God.'",
			"Mosiah 29:26 - 'It is not common that the voice of the people desireth anything contrary to that which is right.'"
		]
	},
	{
		name: "Alma the Younger",
		description: "Initially a rebellious youth, Alma the Younger was visited by an angel and converted to the gospel. He became a prophet and missionary, preaching repentance and organizing the church. His conversion story remains one of the most dramatic in the Book of Mormon.",
		quotes: [
		  "Alma 36:24 - 'I have labored without ceasing, that I might bring souls unto repentance.'",
		  "Alma 29:9 - 'I know that which the Lord hath commanded me, and I glory in it.'",
		  "Alma 38:9 - 'Jesus Christ, the Son of God, who shall come to redeem his people from their sins.'"
		]
	  },
	  {
		name: "Ammon",
		description: "Ammon, one of the sons of Mosiah, was a missionary who served among the Lamanites. He won their trust by defending King Lamoni's flocks and taught them about Christ, leading to the conversion of thousands.",
		quotes: [
		  "Alma 26:12 - 'Yea, I know that I am nothing; as to my strength I am weak.'",
		  "Alma 17:29 - 'I will go and defend the flocks of the king unto the servants.'",
		  "Alma 26:35 - 'Blessed be the name of my God, who has been mindful of this people.'"
		]
	  },
	  {
		name: "Captain Moroni",
		description: "Captain Moroni was a military leader and devout defender of freedom. He is famous for creating the 'Title of Liberty,' rallying the Nephites to protect their families and faith. His leadership was pivotal during times of war.",
		quotes: [
		  "Alma 46:12 - 'In memory of our God, our religion, and freedom.'",
		  "Alma 48:17 - 'If all men had been, and were, and ever would be, like unto Moroni.'",
		  "Alma 60:36 - 'The Lord will not suffer that we shall perish.'"
		]
	  },
	  {
		name: "Helaman",
		description: "Helaman, the son of Alma, was a prophet and military leader. He commanded the two thousand stripling warriors, young men whose faith and obedience led to miraculous protection in battle.",
		quotes: [
		  "Alma 56:46 - 'Behold our God is with us, and he will not suffer that we shall fall.'",
		  "Alma 57:21 - 'They did obey and observe to perform every word of command with exactness.'",
		  "Alma 58:11 - 'The Lord did visit us with assurances that he would deliver us.'"
		]
	  },
	  {
		name: "Samuel the Lamanite",
		description: "Samuel was a Lamanite prophet who climbed the walls of Zarahemla to preach repentance and prophesy of Christ's coming. Despite being rejected and attacked, he courageously delivered his message.",
		quotes: [
		  "Helaman 13:5 - 'Thus saith the Lord: Blessed are they who will repent.'",
		  "Helaman 14:2 - 'Five years more cometh the Son of God.'",
		  "Helaman 15:7 - 'Faith and repentance bringeth a change of heart unto them.'"
		]
	  },
	  {
		name: "Abinadi",
		description: "Abinadi was a bold prophet who preached repentance to King Noah and his priests. Despite facing death, he fearlessly testified of Christ and the plan of salvation. His words influenced Alma, who became a great prophet.",
		quotes: [
		  "Mosiah 13:28 - 'Salvation doth not come by the law alone; and were it not for the atonement, which God himself shall make, there could be no redemption.'",
		  "Mosiah 12:27 - 'Ye have not applied your hearts to understanding.'",
		  "Mosiah 14:3 - 'He is despised and rejected of men; a man of sorrows, and acquainted with grief.'"
		]
	  },
	  {
		name: "Mormon",
		description: "Mormon was a prophet and military leader who compiled the Book of Mormon from ancient records. Despite leading the Nephites during their decline, he remained faithful to God and recorded his people's history for future generations.",
		quotes: [
		  "Mormon 3:12 - 'I did stand as an idle witness to manifest unto the world the things which I saw and heard.'",
		  "Mormon 8:37 - 'I perceive that the great destruction which one day shall come upon the Nephites is near at hand.'",
		  "Mormon 7:7 - 'Ye may be a light unto this people.'"
		]
	  },
	  {
		name: "Moroni",
		description: "Moroni, the son of Mormon, was the last prophet of the Nephite civilization. He finished the record, wrote his own testimony, and buried the gold plates. Moroni later appeared to Joseph Smith as an angel to guide the restoration of the gospel.",
		quotes: [
		  "Moroni 10:4 - 'I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.'",
		  "Moroni 10:32 - 'Come unto Christ, and be perfected in him.'",
		  "Moroni 7:47 - 'But charity is the pure love of Christ, and it endureth forever.'"
		]
	  },
	{
		name: "Brother of Jared",
		description: "The brother of Jared, also known as Mahonri Moriancumer, was a great Jaredite prophet known for his remarkable faith. He saw the Lord and received instructions to lead his people to the promised land.",
		quotes: [
			"And the Lord said: Go to work and build, after the manner of barges which ye have hitherto built. Ether 2:16",
			"And he had faith no longer, for he knew, nothing doubting. Ether 3:19",
			"And when he had said these words, behold, the Lord stretched forth his hand and touched the stones one by one with his finger. Ether 3:6"
		]
	},
	{
        name: "Sherem",
        description: "An Antichrist who confronted Jacob, denying Christ and seeking to shake Jacob’s faith.",
        quotes: [
            "Brother Jacob, I have sought much opportunity that I might speak unto you. (Jacob 7:6)",
            "There should be no Christ; for no man can tell of things to come. (Jacob 7:7)",
        ]
    },
    {
        name: "Amalickiah",
        description: "A Nephite dissenter who became a Lamanite king through treachery, seeking to destroy Nephite liberty.",
        quotes: [
            "He did appoint men to speak unto the Lamanites from their towers, against the Nephites. (Alma 48:1)",
            "If you will lay down your arms, and subject yourselves to be governed by those whom I have appointed, then you shall be spared. (Alma 51:20)",
        ]
    },
    {
        name: "Giddianhi",
        description: "A leader of the Gadianton robbers who demanded Nephite surrender and led an attack against them.",
        quotes: [
            "Yield yourselves up unto us, and unite with us and become acquainted with our secret works, and become our brethren. (3 Nephi 3:7)",
            "I will avenge my people of their wrongs. (3 Nephi 4:14)",
        ]
    },
    {
        name: "Korihor",
        description: "An Antichrist who preached against Christ and denied the existence of God, eventually being struck dumb.",
        quotes: [
            "O ye that are bound down under a foolish and a vain hope, why do ye yoke yourselves with such foolish things? (Alma 30:13)",
            "I do not deny the existence of a God, but I do not believe that there is a God. (Alma 30:37)",
        ]
    },
    {
        name: "Zeezrom",
        description: "A lawyer who initially opposed Alma and Amulek but later repented and became a faithful missionary.",
        quotes: [
            "Behold, here are six onties of silver, and all these will I give thee if thou wilt deny the existence of a Supreme Being. (Alma 11:22)",
            "Is there more than one God? (Alma 11:28)",
        ]
    }
  ];
  
  /**
   *
   * BOXY RUN
   * ----
   * Simple Temple-Run-esque game, created with love by Wan Fung Chui.
   *
   */
  
  /**
   * Constants used in this game.
   */
  var Colors = {
	cherry: 0xe35d6a,
	blue: 0x1560bd,
	white: 0xd8d0d1,
	black: 0x000000,
	brown: 0x59332e,
	peach: 0xffdab9,
	yellow: 0xffff00,
	olive: 0x556b2f,
	grey: 0x696969,
	sand: 0xc2b280,
	brownDark: 0x23190f,
	green: 0x669900,
  };
  
  var deg2Rad = Math.PI / 180;
  
  // Make a new world when the page is loaded.
  window.addEventListener("load", function () {
	new World();
  });
  
  /**
   *
   * THE WORLD
   *
   * The world in which Boxy Run takes place.
   *
   */
  
  /**
   * A class of which the world is an instance. Initializes the game
   * and contains the main game loop.
   *
   */
  function World() {
	// Explicit binding of this even in changing contexts.
	var self = this;
  
	// Scoped variables in this world.
	var element,
	  scene,
	  camera,
	  character,
	  renderer,
	  light,
	  objects,
	  paused,
	  keysAllowed,
	  score,
	  difficulty,
	  treePresenceProb,
	  maxTreeSize,
	  fogDistance,
	  gameOver;
  
	// Initialize the world.
	init();
  
	/**
	 * Builds the renderer, scene, lights, camera, and the character,
	 * then begins the rendering loop.
	 */
	function init() {
	  // Locate where the world is to be located on the screen.
	  element = document.getElementById("world");
  
	  // Initialize the renderer.
	  renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true,
	  });
	  renderer.setSize(element.clientWidth, element.clientHeight);
	  renderer.shadowMap.enabled = true;
	  element.appendChild(renderer.domElement);
  
	  // Initialize the scene.
	  scene = new THREE.Scene();
	  fogDistance = 40000;
	  scene.fog = new THREE.Fog(0xbadbe4, 1, fogDistance);
  
	  // Initialize the camera with field of view, aspect ratio,
	  // near plane, and far plane.
	  camera = new THREE.PerspectiveCamera(
		60,
		element.clientWidth / element.clientHeight,
		1,
		120000
	  );
	  camera.position.set(0, 1500, -2000);
	  camera.lookAt(new THREE.Vector3(0, 600, -5000));
	  window.camera = camera;
  
	  // Set up resizing capabilities.
	  window.addEventListener("resize", handleWindowResize, false);
  
	  // Initialize the lights.
	  light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
	  scene.add(light);
  
	  // Initialize the character and add it to the scene.
	  character = new Character();
	  scene.add(character.element);
  
	  var ground = createBox(3000, 20, 120000, Colors.sand, 0, -400, -60000);
	  scene.add(ground);
  
	  objects = [];
	  treePresenceProb = 0.2;
	  maxTreeSize = 0.5;
	  for (var i = 10; i < 40; i++) {
		createRowOfTrees(i * -3000, treePresenceProb, 0.5, maxTreeSize);
	  }
  
	  // The game is paused to begin with and the game is not over.
	  gameOver = false;
	  paused = true;
  
	  // Start receiving feedback from the player.
	  var left = 37;
	  var up = 38;
	  var right = 39;
	  var p = 80;
  
	  keysAllowed = {};
	  document.addEventListener("keydown", function (e) {
		if (!gameOver) {
		  var key = e.keyCode;
		  if (keysAllowed[key] === false) return;
		  keysAllowed[key] = false;
		  if (paused && !collisionsDetected() && key > 18) {
			paused = false;
			character.onUnpause();
			document.getElementById("variable-content").style.visibility =
			  "hidden";
			document.getElementById("controls").style.display = "none";
		  } else {
			if (key == p) {
			  paused = true;
			  character.onPause();
			  document.getElementById("variable-content").style.visibility =
				"visible";
			  document.getElementById("variable-content").innerHTML =
				"Game is paused. Press any key to resume.";
			}
			if (key == up && !paused) {
			  character.onUpKeyPressed();
			}
			if (key == left && !paused) {
			  character.onLeftKeyPressed();
			}
			if (key == right && !paused) {
			  character.onRightKeyPressed();
			}
		  }
		}
	  });
	  document.addEventListener("keyup", function (e) {
		keysAllowed[e.keyCode] = true;
	  });
	  document.addEventListener("focus", function (e) {
		keysAllowed = {};
	  });
  
	  // Initialize the scores and difficulty.
	  score = 0;
	  difficulty = 0;
	  document.getElementById("score").innerHTML = score;
  
	  // Begin the rendering loop.
	  loop();
	}
  
	/**
	 * The main animation loop.
	 */
	function loop() {
	  // Update the game.
	  if (!paused) {
		// Add more trees and increase the difficulty.
		if (objects[objects.length - 1].mesh.position.z % 3000 == 0) {
		  difficulty += 2;
		  var levelLength = 30;
		  if (difficulty % levelLength == 0) {
			var level = difficulty / levelLength;
			switch (level) {
			  case 1:
				treePresenceProb = 0.35;
				maxTreeSize = 0.5;
				break;
			  case 2:
				treePresenceProb = 0.35;
				maxTreeSize = 0.65;
				break;
			  case 3:
				treePresenceProb = 0.5;
				maxTreeSize = 0.65;
				break;
			  case 4:
				treePresenceProb = 0.5;
				maxTreeSize = .7;
				break;
			  case 5:
				treePresenceProb = 0.5;
				maxTreeSize = .7;
				break;
			  case 6:
				treePresenceProb = 0.55;
				maxTreeSize = .7;
				break;
			  default:
				treePresenceProb = 0.55;
				maxTreeSize = .7;
			}
		  }
		  if (difficulty >= 5 * levelLength && difficulty < 6 * levelLength) {
			fogDistance -= 25000 / levelLength;
		  } else if (
			difficulty >= 8 * levelLength &&
			difficulty < 9 * levelLength
		  ) {
			fogDistance -= 5000 / levelLength;
		  }
		  createRowOfTrees(-120000, treePresenceProb, 0.5, maxTreeSize);
		  scene.fog.far = fogDistance;
		}
  
		// Move the trees closer to the character.
		objects.forEach(function (object) {
		  object.mesh.position.z += 100;
		});
  
		// Remove trees that are outside of the world.
		objects = objects.filter(function (object) {
		  return object.mesh.position.z < 0;
		});
  
		// Make the character move according to the controls.
		character.update();
  
		// Check for collisions between the character and objects.
		if (collisionsDetected()) {
		  gameOver = true;
		  paused = true;
		  document.addEventListener("keydown", function (e) {
			if (e.keyCode == 40) document.location.reload(true);
		  });
		  var variableContent = document.getElementById("variable-content");
		  variableContent.style.visibility = "visible";
		  variableContent.innerHTML =
			"Game over! Press the down arrow to try again.";
		  var table = document.getElementById("ranks");
		  var rankNames = [
			"Common Citizen of Zarahemla",
			"Lamanite Convert",
			"Faithful Stripling Warrior",
			"Daily Disciple of Nephi",
			"Local Preacher of Ammon",
			"Regional Captain of Moroni",
			"Prophet's Trusted Counselor",
			"Champion of the Title of Liberty",
		];
		
		  var rankIndex = Math.floor(score / 15000);
  
		  // If applicable, display the next achievable rank.
		  if (score < 124000) {
			var nextRankRow = table.insertRow(0);
			nextRankRow.insertCell(0).innerHTML =
			  rankIndex <= 5
				? "".concat((rankIndex + 1) * 15, "k-", (rankIndex + 2) * 15, "k")
				: rankIndex == 6
				? "105k-124k"
				: "124k+";
			nextRankRow.insertCell(1).innerHTML =
			  "*Score within this range to earn the next rank*";
		  }
  
		  // Display the achieved rank.
		  var achievedRankRow = table.insertRow(0);
		  achievedRankRow.insertCell(0).innerHTML =
			rankIndex <= 6
			  ? "".concat(rankIndex * 15, "k-", (rankIndex + 1) * 15, "k").bold()
			  : score < 124000
			  ? "105k-124k".bold()
			  : "124k+".bold();
		  achievedRankRow.insertCell(1).innerHTML =
			rankIndex <= 6
			  ? "Congrats! You're a ".concat(rankNames[rankIndex], "!").bold()
			  : score < 124000
			  ? "Congrats! You're a ".concat(rankNames[7], "!").bold()
			  : "Congrats! You exceeded the creator's high score of 123790 and beat the game!".bold();
  
		  // Display all ranks lower than the achieved rank.
		  if (score >= 120000) {
			rankIndex = 7;
		  }
		  for (var i = 0; i < rankIndex; i++) {
			var row = table.insertRow(i);
			row.insertCell(0).innerHTML = "".concat(
			  i * 15,
			  "k-",
			  (i + 1) * 15,
			  "k"
			);
			row.insertCell(1).innerHTML = rankNames[i];
		  }
		  if (score > 124000) {
			var row = table.insertRow(7);
			row.insertCell(0).innerHTML = "105k-124k";
			row.insertCell(1).innerHTML = rankNames[7];
		  }
		}
  
		// Update the scores.
		score += 10;
		document.getElementById("score").innerHTML = score;
	  }
  
	  // Render the page and repeat.
	  renderer.render(scene, camera);
	  requestAnimationFrame(loop);
	}
  
	/**
	 * A method called when window is resized.
	 */
	function handleWindowResize() {
	  renderer.setSize(element.clientWidth, element.clientHeight);
	  camera.aspect = element.clientWidth / element.clientHeight;
	  camera.updateProjectionMatrix();
	}
  
	/**
	 * Creates and returns a row of trees according to the specifications.
	 *
	 * @param {number} POSITION The z-position of the row of trees.
	 * @param {number} PROBABILITY The probability that a given lane in the row
	 *                             has a tree.
	 * @param {number} MINSCALE The minimum size of the trees. The trees have a
	 *							uniformly distributed size from minScale to maxScale.
	 * @param {number} MAXSCALE The maximum size of the trees.
	 *
	 */
	function createRowOfTrees(position, probability, minScale, maxScale) {
	  for (var lane = -1; lane < 2; lane++) {
		var randomNumber = Math.random();
		if (randomNumber < probability) {
		  var scale = minScale + (maxScale - minScale) * Math.random();
		  var tree = new Tree(lane * 800, -400, position, scale);
  
  
		  objects.push(tree);
		  scene.add(tree.mesh);
		 
		}
	  }
	}
  
	/**
	 * Returns true if and only if the character is currently colliding with
	 * an object on the map.
	 */
	function collisionsDetected() {
	  var charMinX = character.element.position.x - 115;
	  var charMaxX = character.element.position.x + 115;
	  var charMinY = character.element.position.y - 310;
	  var charMaxY = character.element.position.y + 320;
	  var charMinZ = character.element.position.z - 40;
	  var charMaxZ = character.element.position.z + 40;
	  for (var i = 0; i < objects.length; i++) {
		if (
		  objects[i].collides(
			charMinX,
			charMaxX,
			charMinY,
			charMaxY,
			charMinZ,
			charMaxZ
		  )
		) {
			console.log(objects[i].randomNumber)
			openModal(objects[i].randomNumber);
		  return true;
		}
	  }
	  return false;
	}
  }
  function openModal(randomNumber) {
    console.log("made it to OpenModal");

    // Find the modal and modal info element
    var modal = document.getElementById("collisionModal");
    var modalInfo = document.getElementById("modalInfo");
	var modalDescription = document.getElementById("modalDescription");
    var modalQuote = document.getElementById("modalQuote");
    var modalImage = document.getElementById("modalImage"); // Assuming you have an image element in your modal

    // Set the modal info based on randomNumber
    modalInfo.textContent = "You ran into " + bookOfMormonCharacters[randomNumber].name + "!";
	modalDescription.textContent = bookOfMormonCharacters[randomNumber].description;
	modalQuote.textContent = bookOfMormonCharacters[randomNumber].quotes[Math.floor(Math.random() * bookOfMormonCharacters[randomNumber].quotes.length)];
    // Set the image based on the character's randomNumber
    modalImage.src = "bomImages/" + bookOfMormonCharacters[randomNumber].name + ".jpg";  // Ensure you have the correct path for your images
    modalImage.alt = bookOfMormonCharacters[randomNumber].name; // Set alt text for accessibility
	console.log(modalImage.src)
    // Show the modal
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    var closeBtn = document.querySelector(".close-btn");
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

  /**
   *
   * IMPORTANT OBJECTS
   *
   * The character and environmental objects in the game.
   *
   */
  
  /**
   * The player's character in the game.
   */
  function Character() {
	// Explicit binding of this even in changing contexts.
	var self = this;
  
	// Character defaults that don't change throughout the game.
	this.skinColor = Colors.white;
	this.hairColor = Colors.black;
	this.shirtColor = Colors.yellow;
	this.shortsColor = Colors.olive;
	this.jumpDuration = 0.6;
	this.jumpHeight = 2000;
  
	// Initialize the character.
	init();
  
	/**
	 * Builds the character in depth-first order. The parts of are
	 * modelled by the following object hierarchy:
	 *
	 * - character (this.element)
	 *    - head
	 *       - face
	 *       - hair
	 *    - torso
	 *    - leftArm
	 *       - leftLowerArm
	 *    - rightArm
	 *       - rightLowerArm
	 *    - leftLeg
	 *       - rightLowerLeg
	 *    - rightLeg
	 *       - rightLowerLeg
	 *
	 * Also set up the starting values for evolving parameters throughout
	 * the game.
	 *
	 */
	function init() {
	  // Build the character.
	  self.face = createBox(100, 100, 60, self.skinColor, 0, 0, 0);
	  self.hair = createBox(105, 20, 65, self.hairColor, 0, 50, 0);
	  self.head = createGroup(0, 260, -25);
	  self.head.add(self.face);
	  self.head.add(self.hair);
  
	  self.torso = createBox(150, 190, 40, self.shirtColor, 0, 100, 0);
  
	  self.leftLowerArm = createLimb(20, 120, 30, self.skinColor, 0, -170, 0);
	  self.leftArm = createLimb(30, 140, 40, self.skinColor, -100, 190, -10);
	  self.leftArm.add(self.leftLowerArm);
  
	  self.rightLowerArm = createLimb(20, 120, 30, self.skinColor, 0, -170, 0);
	  self.rightArm = createLimb(30, 140, 40, self.skinColor, 100, 190, -10);
	  self.rightArm.add(self.rightLowerArm);
  
	  self.leftLowerLeg = createLimb(40, 200, 40, self.skinColor, 0, -200, 0);
	  self.leftLeg = createLimb(50, 170, 50, self.shortsColor, -50, -10, 30);
	  self.leftLeg.add(self.leftLowerLeg);
  
	  self.rightLowerLeg = createLimb(40, 200, 40, self.skinColor, 0, -200, 0);
	  self.rightLeg = createLimb(50, 170, 50, self.shortsColor, 50, -10, 30);
	  self.rightLeg.add(self.rightLowerLeg);
  
	  self.element = createGroup(0, 0, -4000);
	  self.element.add(self.head);
	  self.element.add(self.torso);
	  self.element.add(self.leftArm);
	  self.element.add(self.rightArm);
	  self.element.add(self.leftLeg);
	  self.element.add(self.rightLeg);
  
	  // Initialize the player's changing parameters.
	  self.isJumping = false;
	  self.isSwitchingLeft = false;
	  self.isSwitchingRight = false;
	  self.currentLane = 0;
	  self.runningStartTime = new Date() / 1000;
	  self.pauseStartTime = new Date() / 1000;
	  self.stepFreq = 2;
	  self.queuedActions = [];
	}
  
	/**
	 * Creates and returns a limb with an axis of rotation at the top.
	 *
	 * @param {number} DX The width of the limb.
	 * @param {number} DY The length of the limb.
	 * @param {number} DZ The depth of the limb.
	 * @param {color} COLOR The color of the limb.
	 * @param {number} X The x-coordinate of the rotation center.
	 * @param {number} Y The y-coordinate of the rotation center.
	 * @param {number} Z The z-coordinate of the rotation center.
	 * @return {THREE.GROUP} A group that includes a box representing
	 *                       the limb, with the specified properties.
	 *
	 */
	function createLimb(dx, dy, dz, color, x, y, z) {
	  var limb = createGroup(x, y, z);
	  var offset = -1 * (Math.max(dx, dz) / 2 + dy / 2);
	  var limbBox = createBox(dx, dy, dz, color, 0, offset, 0);
	  limb.add(limbBox);
	  return limb;
	}
  
	/**
	 * A method called on the character when time moves forward.
	 */
	this.update = function () {
	  // Obtain the curren time for future calculations.
	  var currentTime = new Date() / 1000;
  
	  // Apply actions to the character if none are currently being
	  // carried out.
	  if (
		!self.isJumping &&
		!self.isSwitchingLeft &&
		!self.isSwitchingRight &&
		self.queuedActions.length > 0
	  ) {
		switch (self.queuedActions.shift()) {
		  case "up":
			self.isJumping = true;
			self.jumpStartTime = new Date() / 1000;
			break;
		  case "left":
			if (self.currentLane != -1) {
			  self.isSwitchingLeft = true;
			}
			break;
		  case "right":
			if (self.currentLane != 1) {
			  self.isSwitchingRight = true;
			}
			break;
		}
	  }
  
	  // If the character is jumping, update the height of the character.
	  // Otherwise, the character continues running.
	  if (self.isJumping) {
		var jumpClock = currentTime - self.jumpStartTime;
		self.element.position.y =
		  self.jumpHeight *
			Math.sin((1 / self.jumpDuration) * Math.PI * jumpClock) +
		  sinusoid(
			2 * self.stepFreq,
			0,
			20,
			0,
			self.jumpStartTime - self.runningStartTime
		  );
		if (jumpClock > self.jumpDuration) {
		  self.isJumping = false;
		  self.runningStartTime += self.jumpDuration;
		}
	  } else {
		var runningClock = currentTime - self.runningStartTime;
		self.element.position.y = sinusoid(
		  2 * self.stepFreq,
		  0,
		  20,
		  0,
		  runningClock
		);
		self.head.rotation.x =
		  sinusoid(2 * self.stepFreq, -10, -5, 0, runningClock) * deg2Rad;
		self.torso.rotation.x =
		  sinusoid(2 * self.stepFreq, -10, -5, 180, runningClock) * deg2Rad;
		self.leftArm.rotation.x =
		  sinusoid(self.stepFreq, -70, 50, 180, runningClock) * deg2Rad;
		self.rightArm.rotation.x =
		  sinusoid(self.stepFreq, -70, 50, 0, runningClock) * deg2Rad;
		self.leftLowerArm.rotation.x =
		  sinusoid(self.stepFreq, 70, 140, 180, runningClock) * deg2Rad;
		self.rightLowerArm.rotation.x =
		  sinusoid(self.stepFreq, 70, 140, 0, runningClock) * deg2Rad;
		self.leftLeg.rotation.x =
		  sinusoid(self.stepFreq, -20, 80, 0, runningClock) * deg2Rad;
		self.rightLeg.rotation.x =
		  sinusoid(self.stepFreq, -20, 80, 180, runningClock) * deg2Rad;
		self.leftLowerLeg.rotation.x =
		  sinusoid(self.stepFreq, -130, 5, 240, runningClock) * deg2Rad;
		self.rightLowerLeg.rotation.x =
		  sinusoid(self.stepFreq, -130, 5, 60, runningClock) * deg2Rad;
  
		// If the character is not jumping, it may be switching lanes.
		if (self.isSwitchingLeft) {
		  self.element.position.x -= 200;
		  var offset = self.currentLane * 800 - self.element.position.x;
		  if (offset > 800) {
			self.currentLane -= 1;
			self.element.position.x = self.currentLane * 800;
			self.isSwitchingLeft = false;
		  }
		}
		if (self.isSwitchingRight) {
		  self.element.position.x += 200;
		  var offset = self.element.position.x - self.currentLane * 800;
		  if (offset > 800) {
			self.currentLane += 1;
			self.element.position.x = self.currentLane * 800;
			self.isSwitchingRight = false;
		  }
		}
	  }
	};
  
	/**
	 * Handles character activity when the left key is pressed.
	 */
	this.onLeftKeyPressed = function () {
	  self.queuedActions.push("left");
	};
  
	/**
	 * Handles character activity when the up key is pressed.
	 */
	this.onUpKeyPressed = function () {
	  self.queuedActions.push("up");
	};
  
	/**
	 * Handles character activity when the right key is pressed.
	 */
	this.onRightKeyPressed = function () {
	  self.queuedActions.push("right");
	};
  
	/**
	 * Handles character activity when the game is paused.
	 */
	this.onPause = function () {
	  self.pauseStartTime = new Date() / 1000;
	};
  
	/**
	 * Handles character activity when the game is unpaused.
	 */
	this.onUnpause = function () {
	  var currentTime = new Date() / 1000;
	  var pauseDuration = currentTime - self.pauseStartTime;
	  self.runningStartTime += pauseDuration;
	  if (self.isJumping) {
		self.jumpStartTime += pauseDuration;
	  }
	};
  }
  
  /**
   * A collidable tree in the game positioned at X, Y, Z in the scene and with
   * scale S.
   */
  function Tree(x, y, z, s) {
	// Explicit binding.
	var self = this;
	this.randomNumber = Math.floor(Math.random() * bookOfMormonCharacters.length);

	// The object portrayed in the scene.
	this.mesh = new THREE.Object3D();
	var top = createCylinder(
	  100,
	  1000,
	  1000,
	  500,
	  this.randomNumber,
	  0,
	  1000,
	  180,
	  Math.PI / 2
	);
  
	this.mesh.add(top);
	this.mesh.position.set(x, y, z);
	this.mesh.scale.set(s, s, s);
	this.scale = s;
  
	/**
	 * A method that detects whether this tree is colliding with the character,
	 * which is modelled as a box bounded by the given coordinate space.
	 */
	this.collides = function (minX, maxX, minY, maxY, minZ, maxZ) {
	  var treeMinX = self.mesh.position.x - this.scale * 250;
	  var treeMaxX = self.mesh.position.x + this.scale * 250;
	  var treeMinY = self.mesh.position.y;
	  var treeMaxY = self.mesh.position.y + this.scale * 1150;
	  var treeMinZ = self.mesh.position.z - this.scale * 250;
	  var treeMaxZ = self.mesh.position.z + this.scale * 250;
	  return (
		treeMinX <= maxX &&
		treeMaxX >= minX &&
		treeMinY <= maxY &&
		treeMaxY >= minY &&
		treeMinZ <= maxZ &&
		treeMaxZ >= minZ
	  );
	};
  }
  function createCylinder(
	radiusTop,
	radiusBottom,
	height,
	radialSegments,
	randomNumber, 
	x,
	y,
	z,
	rotationY
  ) {
	// Create cylinder geometry
	var geom = new THREE.CylinderGeometry(
	  radiusTop,
	  radiusBottom,
	  height,
	  radialSegments
	);
  
	// Load the image texture
	const path = "bomImages/" + bookOfMormonCharacters[randomNumber].name + ".jpg";
	console.log(path);
	var texture = new THREE.TextureLoader().load("bomImages/" + bookOfMormonCharacters[randomNumber].name + ".jpg");
  
	// Create material with the image texture
	var mat = new THREE.MeshBasicMaterial({
	  map: texture,
	  side: THREE.DoubleSide,
	});
  
	// Create cylinder mesh with the textured material
	var cylinder = new THREE.Mesh(geom, mat);
  
	// Set shadow properties
	cylinder.castShadow = true;
	cylinder.receiveShadow = true;
  
	// Set position
	cylinder.position.set(x, y, z);
	// Rotate the cylinder to face the player
	cylinder.rotation.x = -Math.PI / 2;
	// Rotate the cylinder to the right
	if (rotationY) {
	  cylinder.rotation.y = rotationY;
	}
	return cylinder;
  }
  
  /**
   *
   * UTILITY FUNCTIONS
   *
   * Functions that simplify and minimize repeated code.
   *
   */
  
  /**
   * Utility function for generating current values of sinusoidally
   * varying variables.
   *
   * @param {number} FREQUENCY The number of oscillations per second.
   * @param {number} MINIMUM The minimum value of the sinusoid.
   * @param {number} MAXIMUM The maximum value of the sinusoid.
   * @param {number} PHASE The phase offset in degrees.
   * @param {number} TIME The time, in seconds, in the sinusoid's scope.
   * @return {number} The value of the sinusoid.
   *
   */
  function sinusoid(frequency, minimum, maximum, phase, time) {
	var amplitude = 0.5 * (maximum - minimum);
	var angularFrequency = 2 * Math.PI * frequency;
	var phaseRadians = (phase * Math.PI) / 180;
	var offset = amplitude * Math.sin(angularFrequency * time + phaseRadians);
	var average = (minimum + maximum) / 2;
	return average + offset;
  }
  
  /**
   * Creates an empty group of objects at a specified location.
   *
   * @param {number} X The x-coordinate of the group.
   * @param {number} Y The y-coordinate of the group.
   * @param {number} Z The z-coordinate of the group.
   * @return {Three.Group} An empty group at the specified coordinates.
   *
   */
  function createGroup(x, y, z) {
	var group = new THREE.Group();
	group.position.set(x, y, z);
	return group;
  }
  
  /**
   * Creates and returns a simple box with the specified properties.
   *
   * @param {number} DX The width of the box.
   * @param {number} DY The height of the box.
   * @param {number} DZ The depth of the box.
   * @param {color} COLOR The color of the box.
   * @param {number} X The x-coordinate of the center of the box.
   * @param {number} Y The y-coordinate of the center of the box.
   * @param {number} Z The z-coordinate of the center of the box.
   * @param {boolean} NOTFLATSHADING True iff the flatShading is false.
   * @return {THREE.Mesh} A box with the specified properties.
   *
   */
  function createBox(dx, dy, dz, color, x, y, z, notFlatShading) {
	var geom = new THREE.BoxGeometry(dx, dy, dz);
	var mat = new THREE.MeshPhongMaterial({
	  color: color,
	  flatShading: notFlatShading != true,
	});
	var box = new THREE.Mesh(geom, mat);
	box.castShadow = true;
	box.receiveShadow = true;
	box.position.set(x, y, z);
	return box;
  }
  
  /**
   * Creates and returns a (possibly asymmetrical) cyinder with the
   * specified properties.
   *
   * @param {number} RADIUSTOP The radius of the cylinder at the top.
   * @param {number} RADIUSBOTTOM The radius of the cylinder at the bottom.
   * @param {number} HEIGHT The height of the cylinder.
   * @param {number} RADIALSEGMENTS The number of segmented faces around
   *                                the circumference of the cylinder.
   * @param {color} COLOR The color of the cylinder.
   * @param {number} X The x-coordinate of the center of the cylinder.
   * @param {number} Y The y-coordinate of the center of the cylinder.
   * @param {number} Z The z-coordinate of the center of the cylinder.
   * @return {THREE.Mesh} A box with the specified properties.
   */
  