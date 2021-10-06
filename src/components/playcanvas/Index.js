/*jshint esversion: 6 */

var GameController = pc.createScript("gameController");

GameController.attributes.add("spawnValues", {
  type: "vec3",
});

GameController.attributes.add("hazardCount", {
  type: "number",
});

GameController.attributes.add("spawnWait", {
  type: "number",
  default: 0,
  placeholder: "s",
});

GameController.attributes.add("waveWait", {
  type: "number",
  default: 0,
  placeholder: "s",
});

GameController.attributes.add("startWait", {
  type: "number",
  default: 0,
  placeholder: "s",
});

GameController.attributes.add("scoreText", {
  type: "entity",
});

GameController.attributes.add("restartText", {
  type: "entity",
});

GameController.attributes.add("gameOverText", {
  type: "entity",
});

GameController.attributes.add("sceneId", {
  type: "string",
  default: "0",
  title: "Scene ID to Load",
});

GameController.prototype._score = 0;
GameController.prototype._gameOver = false;
GameController.prototype._restart = false;

// initialize code called once per entity
GameController.prototype.initialize = function () {
  const self = this;
  const waitForSeconds = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  this.updateScore();
  this.restartText.element.text = "";
  this.gameOverText.element.text = "";

  /* jshint ignore:start */
  const spawnWaves = async () => {
    await waitForSeconds(self.startWait);

    while (true) {
      for (let i = 0; i < this.hazardCount; i++) {
        const hazards = this.app.root.findByTag("hazard");
        const newHazard =
          hazards[Math.floor(pc.math.random(0, hazards.length))].clone();

        const spawnPosition = new pc.Vec3(
          pc.math.random(-this.spawnValues.x, this.spawnValues.x),
          this.spawnValues.y,
          this.spawnValues.z
        );
        const spawnRotation = new pc.Vec3();
        newHazard.rigidbody.teleport(spawnPosition, spawnRotation);
        newHazard.enabled = true;

        await waitForSeconds(self.spawnWait);
      }
      await waitForSeconds(self.waveWait);

      if (this._gameOver) {
        this.restartText.element.text = 'Press "R" for Restart';
        this._restart = true;
        break;
      }
    }
  };
  /* jshint ignore:end */

  spawnWaves();
};

// update code called every frame
GameController.prototype.update = function () {
  if (this._restart) {
    if (this.app.keyboard.isPressed(pc.KEY_R)) {
      this.reloadLevel();
    }
  }
};

GameController.prototype.updateScore = function () {
  this.scoreText.element.text = "Score: " + this._score;
};

GameController.prototype.addScore = function (newScoreValue) {
  this._score += newScoreValue;
  this.updateScore();
};

GameController.prototype.gameOver = function () {
  this.gameOverText.element.text = "Game Over!";
  this._gameOver = true;
};

GameController.prototype.reloadLevel = function () {
  const self = this;
  this.app.root.destroy();

  this.app.loadSceneHierarchy("566389.json", function (err, entity) {
    if (err) {
      console.error(err);
    }
  });
};
